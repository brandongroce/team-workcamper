// components/Sections.tsx
export default function Sections() {
  return (
    <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left: Objective + Skills */}
      <div className="bg-[#2C6E49] text-white rounded-2xl p-6 relative">
        <h2 className="text-2xl font-extrabold text-[#EAD9C6]">Objective</h2>
        <p className="mt-2 bg-[#EAD9C6] text-[#204E37] rounded-xl p-3">
          Resourceful, adaptable team with strengths in guest services, maintenance, and
          administration. Currently RV Camp Hosts at Teton Valley Resort — praised for friendliness
          & reliability.
        </p>

        <h2 className="mt-5 text-2xl font-extrabold text-[#F6F1E7]">Team Skills</h2>
        <ul className="mt-2 space-y-2">
          <li>⛺ Campground Operations & Guest Services</li>
          <li>🔧 Facility Maintenance & Repairs</li>
          <li>🗂 Office & Admin (POS, scheduling, IT)</li>
          <li>🌸 Floral & Grounds Care</li>
          <li>🎉 Event Planning & Coordination</li>
          <li>🤝 Customer Service</li>
          <li>💻 Software & IT Troubleshooting</li>
        </ul>
      </div>

      {/* Right: Experience */}
      <div className="bg-[#A8D0E6] text-[#0e3445] rounded-2xl p-6">
        <h2 className="text-2xl font-extrabold">Experience</h2>
        <div className="mt-2 space-y-3">
          <div>
            <h3 className="font-bold">RV Camp Hosts | Teton Valley Resort (2025–Present)</h3>
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
  );
}
