import Header from '../components/Header';
import Hero from '../components/Hero';
import Ethos from '../components/Ethos';
import AvailableServices from '../components/AvailableServices';
import OurResults from '../components/OurResults';
import ApproachSections from '../components/ApproachSections';
import PremiumLocation from '../components/PremiumLocation';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Ethos />
      <AvailableServices />
      <OurResults />
      <ApproachSections />
      <PremiumLocation />
      <Footer />
    </div>
  );
}