import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TextSection from "./components/TextSection";

export default function Home() {
  return (
 <div>
  <Navbar/>
  <HeroSection/>
<TextSection/>
 </div>
  );
}
