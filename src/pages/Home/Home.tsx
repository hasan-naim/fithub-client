import React, { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import ExercisesSection from "../../components/ExercisesSection/ExercisesSection";
import InsturctorSection from "../../components/InsturctorSection/InsturctorSection";

function Home() {
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main>
      <Banner />
      <ExercisesSection />
      <InsturctorSection />
    </main>
  );
}

export default Home;
