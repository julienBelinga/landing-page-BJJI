import AthleteQuote from "@/sections/athleteQuote/athleteQuote";
import Benefits from "@/sections/benefits/benefits";
import CallToAction from "@/sections/callToAction/callToAction";
import ExampleAthlete from "@/sections/exampleAthlete/exampleAthlete";
import Feedbacks from "@/sections/feedbacks/feedbacks";
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
      <ExampleAthlete />
      <Feedbacks />
      <AthleteQuote />
      <CallToAction />
    </>
  );
}
