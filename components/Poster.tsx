import Image from 'next/image';
import BackgroundArt from './BackgroundArt';


export default function Poster() {
  return (
    <main className="relative mx-auto max-w-[1280px] p-6 md:p-8">
      <BackgroundArt />


      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4">
        {/* Left column */}
        <div className="bg-sage text-white rounded-2xl p-5 md:p-6 relative">
          <h2 className="text-2xl font-extrabold text-[#EAD9C6]">Objective</h2>
          <p className="mt-2 bg-[#EAD9C6] text-sage rounded-xl p-3 text-base leading-relaxed">
            Resourceful, adaptable team with strengths in guest services, maintenance, and administration.
            Currently RV Camp Hosts at Teton Valley Resort — praised for friendliness & reliability.
          </p>


          <h2 className="mt-5 text-2xl font-extrabold text-[#F6F1E7]">Team Skills</h2>
          <ul className="mt-2 space-y-2 text-[1.05rem]">
            <li>⛺ Campground Operations & Guest Services</li>
            <li>🔧 Facility Maintenance & Repairs</li>
            <li>🗂 Office & Admin (POS, scheduling, IT)</li>
            <li>🌸 Floral & Grounds Care</li>
            <li>🎉 Event Planning & Coordination</li>
            <li>🤝 Customer Service</li>
            <li>💻 Software & IT Troubleshooting</li>
          </ul>
        </div>


        {/* Right column */}
        <div className="bg-sky text-[#0e3445] rounded-2xl p-5 md:p-6 relative">
          <h2 className="text-2xl font-extrabold">Experience</h2>
          <div className="mt-2 space-y-4">
            <div>
              <h3 className="font-bold text-lg">RV Camp Hosts | Teton Valley Resort (2025–Present)</h3>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Brandon: irrigation, site turnover, repairs</li>
                <li>Amanda: office ops, retail, landscaping</li>
                <li>Positive reviews & guest feedback</li>
              </ul>
            </div>
            <p><strong>RV Camp Hosts | Eagle Valley Resort</strong></p>
            <p><strong>Instacart Shopper</strong></p>
            <p><strong>Software Engineer</strong></p>
            <p><strong>Teacher (10 yrs)</strong></p>
            <p><strong>Administrative Assistant</strong></p>
            <p><strong>Manager | Starbucks</strong></p>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="mt-4 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-4 items-center">
        <div className="rounded-2xl bg-gradient-to-r from-[#F5DDC7] to-[#F9E7D6] p-3 flex items-center gap-3">
          <div className="relative w-full h-[190px] rounded-xl overflow-hidden">
            <Image src="/rv.jpg" alt="RV Setup" fill className="object-cover" />
          </div>
          <div className="font-bold text-neutral-800">Fully Equipped & Self-Sufficient</div>
        </div>
        <div className="text-center">
          <div className="relative w-44 h-44 rounded-full bg-[#F2D1A8] mx-auto overflow-hidden">
            <Image src="/tank.jpg" alt="Tank the cat" fill className="object-cover" />
          </div>
          <div className="mt-2 font-bold"><span className="font-extrabold">Tank</span> – Travel Companion</div>
        </div>
      </footer>
    </main>
  );
}