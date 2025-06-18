import Benefits from "@/sections/benefits/benefits";
import Functionalities from "@/sections/functionalities/functionalities";
import Herobanner from "@/sections/hero-banner/herobanner";
import Intro from "@/sections/intro/intro";

export default function Home() {
  return (
    <>
      <Herobanner />
      <Intro />
      <Benefits />
      <Functionalities />
    </>
  );
}
