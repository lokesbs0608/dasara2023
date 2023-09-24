import HeroSection from "@/components/HeroSection";
import Guest from "@/components/guest";
import LiveStrem from "@/components/liveStream";
import PressNote from "@/components/gallery";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Guest />
      <div id="liveStream">

      <LiveStrem/>
      <PressNote/>
      </div>
    </div>
  );
}
