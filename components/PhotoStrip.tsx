// components/PhotoStrip.tsx
import Image from "next/image";

export default function PhotoStrip() {
  return (
    <section className="mt-6 grid grid-cols-1 md:grid-cols-[1fr_260px] gap-6 items-center">
      {/* RV photo */}
      <div className="rounded-2xl bg-gradient-to-r from-[#F5DDC7] to-[#F9E7D6] p-3 flex items-center gap-3">
        <div className="relative w-full h-[190px] rounded-xl overflow-hidden bg-white/60">
          <Image src="/rv.jpg" alt="RV setup" fill className="object-cover" />
        </div>
        <div className="font-bold text-neutral-800 shrink-0">
          Fully Equipped & Self-Sufficient
        </div>
      </div>

      {/* Tank photo */}
      <div className="text-center">
        <div className="relative w-44 h-44 rounded-full bg-[#F2D1A8] mx-auto overflow-hidden">
          <Image src="/tank.jpg" alt="Tank the cat" fill className="object-cover" />
        </div>
        <div className="mt-2 font-bold">
          <span className="font-extrabold">Tank</span> – Travel Companion
        </div>
      </div>
    </section>
  );
}
