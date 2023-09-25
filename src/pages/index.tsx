import HeroSection from "@/components/HeroSection";
import Guest from "@/components/guest";
import LiveStrem from "@/components/liveStream";
import Gallery from "@/components/gallery";
import PressNote from "@/pages/pressnote";
import AboutUs from "./aboutus";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div id="aboutus">
        <AboutUs />
      </div>
      <Guest />
      <div id="liveStream">
        <LiveStrem />
      </div>

      <div id="gallery">
        <Gallery />
      </div>
      <div id="pressnote">
        <PressNote />
      </div>
    </div>
  );
}
