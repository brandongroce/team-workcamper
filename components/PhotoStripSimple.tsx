import Image from "next/image";

export default function PhotoStripSimple() {
  return (
    <section className="mt-10">
      <div className="rounded-3xl bg-white/60 backdrop-blur p-5 ring-1 ring-black/5">
        {/* Decorative rail to match site colors */}
        <div className="h-1 bg-gradient-to-r from-sunsetA via-sky to-sage rounded-full mb-5" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Our Rig */}
          <div>
            <h3 className="text-lg md:text-xl font-extrabold mb-3">Our Rig</h3>
            <div className="grid grid-cols-1 gap-4">
              <Frame aspect="16/10">
                <Image src="/rv1.jpg" alt="Our RV 1" fill className="object-cover" />
              </Frame>
              <Frame aspect="16/10">
                <Image src="/rv2.jpg" alt="Our RV 2" fill className="object-cover" />
              </Frame>
            </div>
          </div>

          {/* Travel Companion */}
          <div>
            <h3 className="text-lg md:text-xl font-extrabold mb-3">Travel Companion</h3>
            <div className="grid grid-cols-1 gap-4">
              <Frame aspect="1/1">
                <Image src="/cat1.jpg" alt="Tank the cat 1" fill className="object-cover" />
              </Frame>
              <Frame aspect="1/1">
                <Image src="/cat2.jpg" alt="Tank the cat 2" fill className="object-cover" />
              </Frame>
            </div>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-sage via-sky to-sunsetA rounded-full mt-5" />
      </div>
    </section>
  );
}

/** A consistent image frame (no captions, no shifting) */
function Frame({
  children,
  aspect = "4/3",
}: {
  children: React.ReactNode;
  aspect?: `${number}/${number}`;
}) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl ring-1 ring-black/5 bg-white"
      style={{
        aspectRatio: aspect,       // native CSS, keeps sizes consistent
        minHeight: aspect === "1/1" ? "240px" : "220px", // avoid tiny gaps
      }}
    >
      {children}
    </div>
  );
}
