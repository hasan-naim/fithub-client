import React from "react";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

import Heading from "../Heading/Heading";

const data: {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}[] = [
  {
    bodyPart: "upper arms",
    equipment: "weighted",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1755.gif",
    id: "1755",
    name: "weighted tricep dips",
    target: "triceps",
  },
  {
    bodyPart: "upper arms",
    equipment: "weighted",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1767.gif",
    id: "1767",
    name: "weighted triceps dip on high parallel bars",
    target: "triceps",
  },
  {
    bodyPart: "waist",
    equipment: "wheel roller",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0857.gif",
    id: "0857",
    name: "wheel rollerout",
    target: "abs",
  },
  {
    bodyPart: "cardio",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3637.gif",
    id: "3637",
    name: "wheel run",
    target: "cardiovascular system",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1429.gif",
    id: "1429",
    name: "wide grip pull-up",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1367.gif",
    id: "1367",
    name: "wide grip rear pull-up",
    target: "lats",
  },
];

function ExercisesSection() {
  return (
    <section className="mt-24" id="exercises">
      <div className="container">
        <Heading txt="Exercises" />

        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExerciseCard />
        </div>
      </div>
    </section>
  );
}

export default ExercisesSection;
