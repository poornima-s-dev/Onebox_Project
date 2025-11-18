import { useEffect, useState } from "react";
import { api } from "../api";
import Sidebar from "../components/Sidebar";
import EmailList from "../components/EmailList";
import EmailViewer from "../components/EmailViewer";
import ReplyModal from "../components/ReplyModal";

export default function Inbox({ logout }: { logout: () => void }) {
  const [emails, setEmails] = useState([]);
  const [selected, setSelected] = useState<any>(null);
  const [query, setQuery] = useState("");
  const [showReply, setShowReply] = useState(false);

  const loadEmails = async () => {
    const res = await api.get("/emails");
    setEmails(res.data);
  };

  const search = async () => {
    if (!query.trim()) return loadEmails();
    const res = await api.get(`/emails/search?query=${query}`);
    setEmails(res.data);
  };

  const openSuggestedReply = () => setShowReply(true);

  useEffect(() => {
    loadEmails();
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar logout={logout} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Top Bar */}
        <div
          style={{
            padding: 10,
            borderBottom: "1px solid #eee",
            display: "flex",
            gap: 10
          }}
        >
          <input
            placeholder="Search emails..."
            style={{ flex: 1, padding: 8 }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={search}>Search</button>
        </div>

        <div style={{ flex: 1, display: "flex" }}>
          <EmailList emails={emails} onSelect={setSelected} />
          <EmailViewer
            email={selected}
            onReply={openSuggestedReply}
            refresh={loadEmails}
          />
        </div>
      </div>

      {showReply && selected && (
        <ReplyModal emailId={selected.id} onClose={() => setShowReply(false)} />
      )}
    </div>
  );
}
