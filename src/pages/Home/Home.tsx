import React, { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import ExercisesSection from "../../components/ExercisesSection/ExercisesSection";

function Home() {
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main>
      <Banner />
      <ExercisesSection />
    </main>
  );
}

export default Home;
