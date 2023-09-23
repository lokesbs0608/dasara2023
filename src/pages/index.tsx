import HeroSection from "@/components/HeroSection";
import Header from "../components/Header";
import Guest from "@/components/guest";
import LiveStrem from "@/components/liveStream";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Guest />
      <LiveStrem/>
    </div>
  );
}
