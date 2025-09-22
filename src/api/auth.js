import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

export async function loginUser({ name, email }) {
    console.log("API_BASE:", API_BASE); // debug

  const res = await axios.post(`${API_BASE}/api/auth/login`, { name, email }, {
    headers: { "Content-Type": "application/json" }
  });
  console.log("Response:",res.data)
  return res.data; // { message, user }
}
