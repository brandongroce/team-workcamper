import { CampIcon, MusicIcon, CartIcon, CodeIcon, BookIcon } from "./Icons";

// components/Sections.tsx
export default function Sections() {
  return (
    <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left: Objective + Skills */}
      <div className="bg-[#2C6E49] text-white rounded-2xl p-6 relative">
        <h2 className="text-2xl font-extrabold text-[#EAD9C6]">Seeking Opportunities</h2>
        <p className="mt-2 bg-[#EAD9C6] text-[#204E37] rounded-xl p-3">
          We travel in a fully self-contained RV and are flexible with sites that include full hookups or no hookups at all. We’re seeking paid positions as camp hosts, porters, groundskeepers, maintenance staff, or in related areas such as restaurant/bar work, retail, or guest services. Compensation is negotiable, especially for opportunities close to a major metro area.
        </p>

        <h2 className="mt-5 text-2xl font-extrabold text-[#F6F1E7]">Team Skills</h2>
        <ul className="mt-2 space-y-2">
          <li>⛺ Campground Operations & Guest Services</li>
          <li>🔧 Facility Maintenance, Repairs & Irrigation Systems</li>
          <li>🗂 Office & Administration (POS, scheduling, IT setup)</li>
          <li>🌸 Landscaping, Planting & Grounds Care</li>
          <li>🎉 Event Planning, Coordination & Entertainment Hosting</li>
          <li>🤝 Customer Service & Conflict Resolution</li>
          <li>💻 Software Development, Troubleshooting & Support</li>
          <li>🚐 RV/Van Conversion, Off-Grid Systems & DIY Carpentry</li>
          <li>🍳 Food Service & Bar Operations</li>
          <li>🎶 Music, DJ & Audio/Lighting Production</li>
          <li>📦 Logistics, Deliveries & Inventory Management</li>
          <li>📚 Teaching, Training & Team Leadership</li>
        </ul>
      </div>
      {/* Right: Experience */}
      <div className="bg-[#A8D0E6] text-[#0e3445] rounded-2xl p-6">
        <h2 className="text-2xl font-extrabold">Experience</h2>
        <div className="mt-4 space-y-5">

          <div>
            <h3 className="font-bold flex items-center gap-2">
              <CampIcon className="h-5 w-5 text-[#0e3445]" />
              RV Camp Hosts | Teton Valley Resort (2025–Present)
            </h3>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>Campground operations: irrigation, maintenance, site turnover, office, retail, and landscaping</li>
              <li>Consistently praised in guest reviews and feedback</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold flex items-center gap-2">
              <CampIcon className="h-5 w-5 text-[#0e3445]" />
              RV Camp Hosts | Eagle Valley Resort (Summer 2021 & 2022)
            </h3>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>Supported campground operations, site prep, and guest services</li>
              <li>Contributed to maintenance, groundskeeping, and event hosting</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold flex items-center gap-2">
              <MusicIcon className="h-5 w-5 text-[#0e3445]" />
              Event Soundtracks | Owners & DJs
            </h3>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>Produced and hosted weddings, parties, and live events</li>
              <li>Provided DJ, audio, and lighting services</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold flex items-center gap-2">
              <CartIcon className="h-5 w-5 text-[#0e3445]" />
              Instacart Shopper
            </h3>
            <p className="ml-6 mt-1">Demonstrated reliability, accuracy, and customer service in a fast-paced environment</p>
          </div>

          <div>
            <h3 className="font-bold flex items-center gap-2">
              <CodeIcon className="h-5 w-5 text-[#0e3445]" />
              Software Engineer (2004–2019)
            </h3>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>Led development projects across web and backend systems</li>
              <li>Specialized in system architecture, coding, and collaboration</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold flex items-center gap-2">
              <BookIcon className="h-5 w-5 text-[#0e3445]" />
              Teacher (10 yrs)
            </h3>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>Classroom instruction and curriculum development</li>
              <li>Strong communication and organizational skills</li>
            </ul>
          </div>
        </div>
      </div>


    </section>
  );
}
