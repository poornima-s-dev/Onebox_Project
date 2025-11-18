import { api } from "../api";
import { useEffect, useState } from "react";

export default function ReplyModal({
  emailId,
  onClose
}: {
  emailId: string;
  onClose: () => void;
}) {
  const [reply, setReply] = useState("");

  useEffect(() => {
    const load = async () => {
      const res = await api.get(`/suggest-reply/${emailId}`);
      setReply(res.data.reply);
    };
    load();
  }, [emailId]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: 500,
          padding: 20,
          background: "#fff",
          borderRadius: 8
        }}
      >
        <h3>Suggested Reply</h3>

        <textarea
          style={{ width: "100%", height: 200, marginTop: 10 }}
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />

        <div style={{ marginTop: 10, textAlign: "right" }}>
          <button onClick={onClose} style={{ marginRight: 10 }}>
            Close
          </button>
          <button>Send Reply (dummy)</button>
        </div>
      </div>
    </div>
  );
}
