"use client";

import Image from "next/image";
import { useState } from "react";

type Item = {
  src: string;
  alt: string;
  tag: "RV" | "Tank";
  caption?: string;
  // preferred aspect: 16/9 | 4/3 | 1 (square) | 4/5
  aspect?: number;
};

const items: Item[] = [
  { src: "/rv1.jpg",   alt: "RV exterior",      tag: "RV",   caption: "Rig — exterior",       aspect: 16/9 },
  { src: "/rv2.jpg",   alt: "RV at campsite",   tag: "RV",   caption: "Campsite setup",        aspect: 4/3  },
  { src: "/cat1.jpg", alt: "Tank relaxing",    tag: "Tank", caption: "Tank — window nap",     aspect: 1    },
  { src: "/cat2.jpg", alt: "Tank exploring",   tag: "Tank", caption: "Tank — campsite scout", aspect: 4/5  },
];

export default function PhotoStripV2() {
  const [open, setOpen] = useState<Item | null>(null);
  const rvs = items.filter((i) => i.tag === "RV");
  const cats = items.filter((i) => i.tag === "Tank");

  return (
    <section className="mt-10">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-extrabold">Photo Highlights</h2>
        <div className="hidden md:flex gap-2 text-xs">
          <span className="px-2 py-1 rounded-full bg-white/70 ring-1 ring-black/5 text-[#1E5631]">RV × 2</span>
          <span className="px-2 py-1 rounded-full bg-white/70 ring-1 ring-black/5 text-[#1E5631]">Tank × 2</span>
        </div>
      </div>

      <div className="rounded-3xl bg-white/60 backdrop-blur p-4 ring-1 ring-black/5">
        <div className="h-1 bg-gradient-to-r from-sunsetA via-sky to-sage rounded-full mb-4" />

        <div className="grid grid-cols-12 gap-4">
          {/* LEFT (RV) */}
          <div className="col-span-12 md:col-span-7 grid grid-cols-12 gap-4">
            <Card item={rvs[0]} className="col-span-12" onClick={() => setOpen(rvs[0])} />
            <Card item={rvs[1]} className="col-span-12 md:col-span-7 md:translate-y-1" onClick={() => setOpen(rvs[1])} />
          </div>

          {/* RIGHT (Tank) */}
          <div className="col-span-12 md:col-span-5 grid grid-cols-12 gap-4 md:pt-6">
            <Card item={cats[0]} className="col-span-6" onClick={() => setOpen(cats[0])} />
            <Card item={cats[1]} className="col-span-6 md:translate-y-3" onClick={() => setOpen(cats[1])} />
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-sage via-sky to-sunsetA rounded-full mt-4" />
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-5xl w-full">
            <button
              className="absolute -top-10 right-0 text-white/90 hover:text-white text-sm"
              onClick={() => setOpen(null)}
            >
              Close ✕
            </button>
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black">
              <Image src={open.src} alt={open.alt} fill className="object-contain" sizes="100vw" />
            </div>
            {open.caption && <div className="mt-2 text-center text-white/90">{open.caption}</div>}
          </div>
        </div>
      )}
    </section>
  );
}

function Card({
  item,
  className = "",
  onClick,
}: {
  item: Item;
  className?: string;
  onClick?: () => void;
}) {
  const ar = item.aspect ?? 4 / 3;
  // Tailwind doesn't need the aspect plugin if we use inline style
  return (
    <figure
      className={`group rounded-2xl overflow-hidden bg-white ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Fixed frame with aspect-ratio to prevent layout shifts/gaps */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: String(ar),
          // fixed min-heights at breakpoints to avoid sub-pixel gaps
          // @ts-ignore – CSS custom properties inline
          ["--minH" as any]: ar >= 1.6 ? "180px" : ar >= 1.2 ? "220px" : "260px",
          minHeight: "var(--minH)",
          background: "linear-gradient(180deg, #ffffff 0%, #f7f1e8 100%)",
        }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover will-change-transform transition-transform duration-300 group-hover:scale-[1.02]"
        />

        {/* Tag chip */}
        <span className="absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-[#EAF3EE]/95 text-[#1E5631] ring-1 ring-black/5">
          {item.tag}
        </span>

        {/* Caption overlay (doesn't change card height) */}
        {item.caption && (
          <figcaption className="absolute bottom-0 left-0 right-0 bg-black/35 text-white/95 text-sm px-3 py-1.5">
            <div className="flex items-center justify-between gap-3">
              <span className="truncate">{item.caption}</span>
              <span className="text-[11px] rounded-full px-2 py-0.5 bg-white/85 text-[#0e3445]">View</span>
            </div>
          </figcaption>
        )}
      </div>
    </figure>
  );
}
