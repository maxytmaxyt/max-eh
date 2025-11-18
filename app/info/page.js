import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function InfoPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Spiel-Informationen</h1>
        <p>
          <strong>Emergency Germany</strong> ist ein realistisches Roblox-Spiel 
          rund um Feuerwehr, Polizei, Rettungsdienst und mehr – alles inspiriert 
          von echten deutschen Einsätzen.
        </p>

        <h2>🛠 Features (geplant)</h2>
        <ul>
          <li>Realistische deutsche Einsatzfahrzeuge</li>
          <li>Dynamische Einsätze & Notfälle</li>
          <li>Roleplay-System mit Rängen & Job-System</li>
          <li>Große deutsche Stadt als Map</li>
          <li>Multiplayer mit cross-role teamwork</li>
        </ul>

        <h2>📅 Release</h2>
        <p>
          Das Spiel ist <strong>noch nicht veröffentlicht</strong>. Ein Release-Datum 
          folgt bald. Bleibe über Discord up to date!
        </p>
      </div>
      <Footer />
    </>
  );
}
