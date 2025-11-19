export default function Footer() {
  return (
    <footer className="mt-20 p-6 text-center border-t border-white/10 shadow-[0_0_10px_#00eaff]">
      <p className="text-white/70">
        &copy; {new Date().getFullYear()} Cityblitz. Alle Rechte vorbehalten.
      </p>
    </footer>
  );
}
