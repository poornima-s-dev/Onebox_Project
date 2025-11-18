export default function Sidebar({ logout }: { logout: () => void }) {
  return (
    <div
      style={{
        width: 220,
        background: "#f7f7f7",
        borderRight: "1px solid #ddd",
        padding: 10
      }}
    >
      <h3>Onebox</h3>

      <div style={{ marginTop: 20 }}>
        <button
          onClick={logout}
          style={{
            width: "100%",
            padding: 8,
            background: "#e53935",
            color: "white",
            border: "none"
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
