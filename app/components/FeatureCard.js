"use client";

export default function FeatureCard({ title, description, color }) {
  return (
    <div className={`p-6 rounded-xl bg-white/5 border border-white/10 shadow-[0_0_20px_${color}50] hover:shadow-[0_0_30px_${color}90] transition`}>
      <h2 className="text-2xl neon-sub mb-2">{title}</h2>
      <p className="text-white/80">{description}</p>
    </div>
  );
}
