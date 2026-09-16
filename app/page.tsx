import AboutMe from "./components/aboutMe";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./components/hero";
import { LatestListings } from "./components/LatestListings";
import { StatsCircles } from "./components/StatsCircles";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <h1 className="about-name">DEBORA SUMEY</h1>
      <AboutMe />
      <StatsCircles />
      <LatestListings />
      <Footer />
    </main>
  );
}
