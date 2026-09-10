import Header from './components/Header';
import Hero from './components/Hero';
import QuickHighlights from './components/QuickHighlights';
import About from './components/About';
import Services from './components/Services';
import EClinic from './components/EClinic';
import HowItWorks from './components/HowItWorks';
import Doctors from './components/Doctors';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main>
        <Hero />
        <QuickHighlights />
        <About />
        <Services />
        <EClinic />
        <HowItWorks />
        <Doctors />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
