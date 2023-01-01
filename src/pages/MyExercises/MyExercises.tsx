import React, { useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import { BiAddToQueue } from "react-icons/bi";
import { IoCheckmarkDone } from "react-icons/io5";
import QueueCard from "../../components/QueueCard/QueueCard";

const data = [
  {
    _id: "63abdc0f027f31e8ec073e66",
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0006.gif",
    id: "0006",
    name: "alternate heel touchers",
    target: "abs",
  },
  {
    _id: "63abdc0f027f31e8ec073e66",
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0006.gif",
    id: "0006",
    name: "alternate heel touchers",
    target: "abs",
  },
  {
    _id: "63abdc0f027f31e8ec073e66",
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0006.gif",
    id: "0006",
    name: "assisted lying gluteus and piriformis stretch fdsfsfsa",
    target: "abs",
  },
];

function MyExercises() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="mt-6 min-h-screen">
      <section className="container">
        <Heading txt="My Exercises" />

        {/* queue div */}
        <div className="">
          <h3 className="flex gap-2 items-center text-3xl font-bold mb-6 sticky top-24 ">
            <BiAddToQueue className="w-8 h-8  mt-2" /> Queue
          </h3>
          {/* queue */}
          <div className="grid lg:grid-cols-1 gap-6">
            {data.map((exercise) => {
              return (
                <QueueCard
                  exercise={exercise}
                  key={exercise._id}
                  queued={true}
                />
              );
            })}
          </div>
        </div>

        {/* done div */}
        <div className="mt-12">
          <h3 className="flex gap-2 items-center text-3xl font-bold mb-6 sticky top-24  ">
            🎉 Done
          </h3>

          <div className="grid lg:grid-cols-1 gap-6">
            {data.map((exercise) => {
              return (
                <QueueCard
                  exercise={exercise}
                  key={exercise._id}
                  queued={false}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default MyExercises;
