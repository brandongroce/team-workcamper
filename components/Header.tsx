import Image from 'next/image';


export default function Header() {
  return (
    <header className="relative header-gradient rounded-3xl px-8 py-8 md:px-12 md:py-10 overflow-hidden">
      {/* Tetons silhouette blended into gradient */}
      <svg className="absolute inset-x-0 top-6 w-full" viewBox="0 0 800 120" aria-hidden>
        <g opacity="0.18" fill="#fff" transform="translate(100,0)">
          <path d="M 0 80 L 30 40 L 60 70 L 100 10 L 150 60 L 200 20 L 250 80 L 300 30 L 360 70 L 420 15 L 480 60 L 540 25 L 600 85" />
        </g>
      </svg>


      <div className="relative flex items-center gap-6 md:gap-10">
        <div className="relative shrink-0 rounded-full ring-8 ring-white/95 overflow-hidden w-36 h-36 md:w-48 md:h-48">
          {/* Original, unedited couple photo */}
          <Image src="/couple.jpg" alt="Brandon & Amanda" fill sizes="192px" className="object-cover" />
        </div>
        <div className="text-white drop-shadow-sm">
          <h1 className="text-2xl md:text-4xl font-extrabold">Brandon Groce & Amanda Bee Adcox</h1>
          <p className="text-4xl md:text-6xl font-black tracking-wide leading-tight">WORK CAMPER TEAM</p>
        </div>
      </div>
    </header>
  );
}