// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative rounded-3xl overflow-hidden">
            {/* Background + soft scrim for readability */}
            <div className="absolute inset-0">
                <Image
                    src="/bg-muted.png"
                    alt=""
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-white/45" />
            </div>

            {/* Header content */}
            <div className="relative px-6 md:px-10 py-10 md:py-14 flex items-center gap-6 md:gap-10">
                {/* Couple photo placeholder */}
                <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full ring-8 ring-white overflow-hidden bg-white/60">
                    <Image src="/couple_zoom.jpg" alt="Brandon & Amanda" fill className="object-cover" />
                </div>

                <div className="text-neutral-900">
                    <h1 className="text-2xl md:text-4xl font-extrabold">
                        Brandon & Amanda
                    </h1>
                    <p className="text-4xl md:text-6xl font-black leading-tight">WORKAMPER TEAM</p>
                    <p className="mt-3 max-w-2xl text-base md:text-lg hero-textbox">
                        Hi there! We’re a married couple traveling in our RV with our cat Tank, 
                        ready to roll into our next seasonal adventure. 
                        We’re looking for paid roles where we can put our skills to work — 
                        whether that’s camp hosting, groundskeeping, maintenance, or helping out in a 
                        restaurant, bar, or retail setting. We’re easygoing, flexible on hookups, 
                        and bring plenty of energy and friendliness wherever we land!
                    </p>
                </div>
            </div>
        </section>
    );
}
