import React from "react";
import Carausel from "../components/Carausel";
import OurProgram from "../components/OurProgram";
import Seminar from "../components/Seminar";
import WhySelectUs from "../components/WhySelectUs";
import Achevment from "../components/Achevment";
import Review from "../components/Review";
import Client from "../components/Client";

function Home() {
  return (
    <>
      <Carausel />

      <OurProgram />

      <Seminar />
      <WhySelectUs />
      <Achevment />
      <Review />
      <Client />
    </>
  );
}

export default Home;
