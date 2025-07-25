"use client";

import { useState } from "react";
import AthleteQuote from "@/sections/athleteQuote/athleteQuote";
import Benefits from "@/sections/benefits/benefits";
import CallToAction from "@/sections/callToAction/callToAction";
import ExampleAthlete from "@/sections/exampleAthlete/exampleAthlete";
import Functionalities from "@/sections/functionalities/functionalities";
import Herobanner from "@/sections/hero-banner/herobanner";
import LoadingScreen from "@/components/loadingScreen/loadingScreen";
import MetaHead from "@/components/metaHead/metaHead";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <>
      <MetaHead pageKey="home" />
      <Herobanner />
      <Benefits />
      <Functionalities />
      <ExampleAthlete />
      <AthleteQuote />
      <CallToAction />
    </>
  );
}
