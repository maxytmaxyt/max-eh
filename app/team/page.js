import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Unser Team</h1>
        <p>Das Development-Team hinter Emergency Germany:</p>

        <h2>👑 Leitung</h2>
        <ul>
          <li>Vikilux — Projektleitung / Owner | Discord: @vikilux1234 | [</li>
        </ul>

        <h2>🛠 Developer</h2>
        <ul>
          <li>Developer 1 — Vikilux</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
