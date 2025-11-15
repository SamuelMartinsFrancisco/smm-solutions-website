import About from '../mainPageSections/About';
import Contact from '../mainPageSections/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../mainPageSections/Hero';
import Services from '../mainPageSections/Services';
import Solutions from '../mainPageSections/Solutions';

export default function Home() {

  return (
    <>
      <main className='min-h-[100vh]'>
        <Hero />
        <About />
        <Services />
        <Solutions />
        <Footer />
      </main>
    </>
  );
}