import React from "react";
import Heading from "../Heading/Heading";
import InstructorImg from "../../assets/instructors/instructor-1.jpg";

function InsturctorSection() {
  return (
    <section className="mt-24 bg-primary py-16 text-base-100">
      <div className="container">
        <Heading
          txt={<span className="text-white">Meet Our Instructor</span>}
        />

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden">
            <img
              className="h-full w-full max-w-[500px] mx-auto rounded-xl"
              src={InstructorImg}
              alt="Fitness Instructor"
              loading="lazy"
            />
          </div>
          <div className="flex items-center">
            <p className="text-xl text-base-200">
              Meet John, our talented and certified fitness instructor. With
              over 10 years of experience in the industry and a degree in
              Kinesiology, John is an expert in all things fitness. His classes
              are challenging and fun, and he always makes sure to focus on
              proper form and technique to ensure that everyone is able to
              safely participate. In addition to his impressive credentials,
              John is known for his positive and inclusive approach to fitness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InsturctorSection;
