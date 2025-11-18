import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Inbox from "./pages/Inbox";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  return loggedIn ? (
    <Inbox logout={() => {
      localStorage.removeItem("token");
      setLoggedIn(false);
    }} />
  ) : (
    <Login onLogin={() => setLoggedIn(true)} />
  );
}
