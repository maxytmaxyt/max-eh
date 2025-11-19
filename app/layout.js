import "./globals.css";
import { MotionProvider } from "./motion-provider";

export const metadata = {
  title: "Cityblitz",
  description: "Offizielle Website zum deutschen Minecraft Server Cityblitz"
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
