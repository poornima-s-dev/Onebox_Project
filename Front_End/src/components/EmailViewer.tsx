import { api } from "../api";

export default function EmailViewer({
  email,
  onReply,
  refresh
}: {
  email: any;
  onReply: () => void;
  refresh: () => void;
}) {
  if (!email)
    return (
      <div style={{ flex: 1, padding: 20 }}>
        <h3>Select an email</h3>
      </div>
    );

  const markInterested = async () => {
    await api.post(`/emails/${email.id}/mark-interested`);
    refresh();
  };

  return (
    <div style={{ flex: 1, padding: 20, overflowY: "auto" }}>
      <h2>{email.subject}</h2>
      <p>
        <strong>From:</strong> {email.fromEmail}
      </p>

      <hr />

      <div
        dangerouslySetInnerHTML={{ __html: email.bodyHTML || email.bodyText }}
      />

      <hr />

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={markInterested}>Mark Interested</button>
        <button onClick={onReply}>AI Suggested Reply</button>
      </div>
    </div>
  );
}
