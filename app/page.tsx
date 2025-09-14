// import Header from '../components/Header';
// import Poster from '../components/Poster';
// import ContactBar from '../components/ContactBar';


// export default function Page() {
//   return (
//     <div className="min-h-screen bg-[url('/background.png')] bg-cover bg-bottom">
//       <div className="relative mx-auto max-w-[1280px] p-6 md:p-8">
//         <Header />
//         <ContactBar />
//       </div>
//       <Poster />

//     </div>
//   );
// }

import Hero from "../components/Hero";
import Sections from "../components/Sections";
// import PhotoStrip from "../components/PhotoStrip";
// import PhotoStripV2 from "../components/PhotoStripV2";
// import PhotoStripSimple from "../components/PhotoStripSimple";
import ContactBar from "../components/ContactBar"; // your existing bar
import PhotoStripMini from "../components/PhotoStripMini";

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="relative mx-auto max-w-[1280px] p-6 md:p-8">
        <Hero />
        <ContactBar />
        <Sections />
        {/* <PhotoStrip /> */}
        {/* <PhotoStripV2 /> */}
        {/* <PhotoStripSimple /> */}
        <PhotoStripMini />
      </div>
    </div>
  );
}
