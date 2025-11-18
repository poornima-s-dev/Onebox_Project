import { useState } from "react";
import { api } from "../api";

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await api.post("/login", { email, password });
      localStorage.setItem("token", res.data.token);
      onLogin();
    } catch (err) {
      alert("Invalid login");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "300px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h2>Login</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: 8, margin: "8px 0" }}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: 8, margin: "8px 0" }}
        />

        <button onClick={login} style={{ width: "100%", padding: 8, marginTop: 10 }}>
          Login
        </button>
      </div>
    </div>
  );
}
