import "./globals.css";
import { MotionProvider } from "./motion-provider";

export const metadata = {
  title: "City",
  description: "Offizielle Website zum deutschen Einsatzspiel Emergency German"
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        {/* Neon Background Layers */}
        <div className="neon-bg"></div>
        <div className="neon-grid"></div>

        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
