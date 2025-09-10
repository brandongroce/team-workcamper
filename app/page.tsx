import Header from '@/components/Header';
import Poster from '@/components/Poster';

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="relative mx-auto max-w-[1280px] p-6 md:p-8">
        <Header />
      </div>
      <Poster />
    </div>
  );
}