export default function EmailList({
  emails,
  onSelect
}: {
  emails: any[];
  onSelect: (email: any) => void;
}) {
  return (
    <div
      style={{
        width: 350,
        borderRight: "1px solid #ddd",
        overflowY: "auto"
      }}
    >
      {emails.map((email) => (
        <div
          key={email.id}
          onClick={() => onSelect(email)}
          style={{
            padding: 12,
            borderBottom: "1px solid #eee",
            cursor: "pointer",
            background: "#fff"
          }}
        >
          <strong>{email.subject || "(No Subject)"}</strong>
          <div style={{ color: "#555" }}>{email.fromEmail}</div>

          <span
            style={{
              fontSize: 12,
              padding: "2px 6px",
              background: "#eee",
              borderRadius: 4,
              marginTop: 5,
              display: "inline-block"
            }}
          >
            {email.category}
          </span>
        </div>
      ))}
    </div>
  );
}
