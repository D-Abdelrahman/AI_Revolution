import AITypes from "../components/AITypes";
import Benefits from "../components/Benefits";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AITypes />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
