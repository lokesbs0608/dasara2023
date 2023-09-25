import HeroSection from "@/components/HeroSection";
import Guest from "@/components/guest";
import LiveStrem from "@/components/liveStream";
import Gallery from "@/components/gallery";
import PressNote from "@/pages/pressnote";
import AboutUs from "./aboutus";
import { useEffect } from "react";
import GetApi from "../utils/network";

export default function Home() {
  useEffect(() => {
    // Define an async function for your API call
    async function fetchData() {
      try {
        const resp = await GetApi("pressnote"); // Replace with the desired API endpoint
        console.log(resp, ">>>>");
      } catch (error: any) {
        console.error(error.message);
      }
    }

    // Call the async function immediately
    fetchData();
  }, []);
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
