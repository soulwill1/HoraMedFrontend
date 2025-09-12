import BannerService from "./banner_service";
import Footer from "./footer";
import Hero from "./hero";
import HowItWorks from "./how_it_works";
import Nav from "./nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <BannerService />
      <HowItWorks />
      <Footer />
    </div>
  );
}
