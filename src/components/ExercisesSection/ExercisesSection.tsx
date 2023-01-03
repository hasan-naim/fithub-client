import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

import Heading from "../Heading/Heading";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const data: {
  _id: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}[] = [
  {
    _id: "63abdc0f027f31e8ec074378",
    bodyPart: "shoulders",
    equipment: "weighted",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0844.gif",
    id: "0844",
    name: "weighted round arm",
    target: "delts",
  },
  {
    _id: "63abdc0f027f31e8ec07437b",
    bodyPart: "waist",
    equipment: "weighted",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/2371.gif",
    id: "2371",
    name: "weighted russian twist v. 2",
    target: "abs",
  },
  {
    _id: "63abdc0f027f31e8ec07437c",
    bodyPart: "upper arms",
    equipment: "medicine ball",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0847.gif",
    id: "0847",
    name: "weighted seated bicep curl  (on stability ball)",
    target: "biceps",
  },
  {
    _id: "63abdc0f027f31e8ec07437f",
    bodyPart: "upper legs",
    equipment: "weighted",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0851.gif",
    id: "0851",
    name: "weighted sissy squat",
    target: "quads",
  },
  {
    _id: "63abdc0f027f31e8ec074384",
    bodyPart: "upper legs",
    equipment: "weighted",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3642.gif",
    id: "3642",
    name: "weighted stretch lunge",
    target: "glutes",
  },
  {
    _id: "63abdc0f027f31e8ec07438f",
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0858.gif",
    id: "0858",
    name: "wind sprints",
    target: "abs",
  },
];

function ExercisesSection() {
  return (
    <section className="mt-24" id="exercises">
      <div className="container">
        <Heading txt="Exercises" />

        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((exercise) => {
            return <ExerciseCard key={exercise.id} exerciseData={exercise} />;
          })}
        </div>
        <div className="text-center my-6">
          <Link
            to={"/exercises"}
            className="btn btn-primary flex gap-2 items-center w-fit mx-auto shadow-primaryBtnShadow before:bg-white"
          >
            See More
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ExercisesSection;
