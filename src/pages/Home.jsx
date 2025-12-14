import Header from '../components/Header';
import Hero from '../components/Hero';
import Ethos from '../components/Ethos';
import AvailableServices from '../components/AvailableServices';
import Services from '../components/Services';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Ethos />
      <AvailableServices />
      <Services />
      <Footer />
    </div>
  );
}