"use client";

import Image from "next/image";
import { useState } from "react";

export default function PhotoStripMini() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="mt-8">
      <div className="rounded-2xl bg-white/50 backdrop-blur p-5 ring-1 ring-black/5 shadow-sm">
        {/* Decorative top rail */}
        <div className="h-1 bg-gradient-to-r from-sunsetA via-sky to-sage rounded-full mb-5" />

        <div className="flex flex-col md:flex-row items-start justify-center gap-10">
          {/* Our Rig */}
          <Block title="Our Rig" icon={<RvIcon className="h-5 w-5" />}>
            <div className="flex gap-3">
              <Frame onClick={() => setOpen("/rv1.jpg")}>
                <Image src="/rv1.jpg" alt="RV photo 1" fill className="object-cover" />
              </Frame>
              <Frame onClick={() => setOpen("/rv2.jpg")}>
                <Image src="/rv2.jpg" alt="RV photo 2" fill className="object-cover" />
              </Frame>
              <Frame onClick={() => setOpen("/rv3.jpg")}>
                <Image src="/rv3.jpg" alt="RV photo 3" fill className="object-cover" />
              </Frame>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <Chip>2020 Flagstaff E-Pro E19FBS</Chip>
              <Chip>2013 Ford E250 Conversion Van</Chip>
            </div>
          </Block>

          {/* Divider */}
          <div className="hidden md:block h-14 w-px bg-gradient-to-b from-transparent via-black/10 to-transparent" />

          {/* Travel Companion */}
          <Block title="Travel Companion" icon={<PawIcon className="h-5 w-5" />}>
            <div className="flex gap-3">
              <Frame circle onClick={() => setOpen("/cat1.jpg")}>
                <Image src="/cat1.jpg" alt="Tank photo 1" fill className="object-cover" />
              </Frame>
              <Frame circle onClick={() => setOpen("/cat2.jpg")}>
                <Image src="/cat2.jpg" alt="Tank photo 2" fill className="object-cover" />
              </Frame>
              <Frame circle onClick={() => setOpen("/cat3.jpg")}>
                <Image src="/cat3.jpg" alt="Tank photo 3" fill className="object-cover" />
              </Frame>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <Chip>2014 Bengal "Tank"</Chip>
            </div>
          </Block>
        </div>

        {/* Decorative bottom rail */}
        <div className="h-1 bg-gradient-to-r from-sage via-sky to-sunsetA rounded-full mt-5" />
      </div>

      {/* Lightbox overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <div className="relative max-w-3xl w-full">
            <button
              className="absolute -top-10 right-0 text-white/90 hover:text-white text-sm"
              onClick={() => setOpen(null)}
            >
              Close ✕
            </button>
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black">
              <img
                src={open}
                alt="Enlarged photo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Block({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 max-w-xs">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 ring-1 ring-black/5 shadow-sm">
        <span className="text-[#1E5631]">{icon}</span>
        <h3 className="text-sm md:text-base font-extrabold text-neutral-800">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Frame({
  children,
  circle = false,
  onClick,
}: {
  children: React.ReactNode;
  circle?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden ring-2 ring-white shadow-sm cursor-pointer hover:scale-[1.03] transition-transform ${
        circle ? "rounded-full w-24 h-24 md:w-28 md:h-28" : "rounded-xl w-28 h-20 md:w-32 md:h-24"
      }`}
    >
      {children}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 text-xs rounded-full bg-white/80 ring-1 ring-black/10 text-neutral-700 shadow-sm">
      {children}
    </span>
  );
}

function RvIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 7h10a4 4 0 0 1 4 4v4h-2a2 2 0 0 0-4 0H9a2 2 0 0 0-4 0H3v-2H2v-3a3 3 0 0 1 3-3Zm1 3h5v2H4v-2Zm12 0h3l2 2v2h-5v-4Z" />
    </svg>
  );
}

function PawIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 13c2 0 5 1 5 3s-2 3-5 3-5-1-5-3 3-3 5-3Zm-6.5-3A2.5 2.5 0 1 1 8 7.5 2.5 2.5 0 0 1 5.5 10Zm13 0A2.5 2.5 0 1 1 19 7.5 2.5 2.5 0 0 1 18.5 10ZM10 6a2.5 2.5 0 1 1-2.5-2.5A2.5 2.5 0 0 1 10 6Zm9 0A2.5 2.5 0 1 1 16.5 3.5 2.5 2.5 0 0 1 19 6Z" />
    </svg>
  );
}
