import React, { useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import { BiAddToQueue } from "react-icons/bi";
import { IoCheckmarkDone } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

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
          <h3 className="flex gap-2 items-center text-3xl font-bold mb-6 ">
            <BiAddToQueue className="w-8 h-8  mt-2" /> Queue
          </h3>
          {/* queue */}
          <div className="grid lg:grid-cols-1 gap-6">
            {data.map((exercise) => {
              return (
                <div>
                  <div className="bg-white max-w-xl h-full rounded-xl px-10 py-8 mx-auto flex gap-6">
                    <div className="avatar placeholder items-center">
                      <div className="text-neutral-content rounded-lg w-24">
                        <img src={exercise.gifUrl} alt="" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold uppercase mb-1">
                        {exercise.name}
                      </h4>
                      <div className="mb-1">
                        <h6>
                          <span className="font-bold">Muscle</span>:{" "}
                          {exercise.bodyPart}
                        </h6>
                        <h6>
                          <span className="font-bold">Target</span>:{" "}
                          {exercise.target}
                        </h6>
                      </div>
                    </div>
                    {/* card end */}
                    <div className="ml-auto flex flex-col sm:flex-row gap-3">
                      <button className="">
                        <div
                          className="bg-green-300/30 rounded-full p-1 hover:scale-[1.3] duration-300 tooltip tooltip-success"
                          data-tip="Done"
                        >
                          <IoCheckmarkDone className="w-7 h-7  text-green-500 " />
                        </div>
                      </button>
                      <button>
                        <div
                          className="bg-red-300/30 rounded-full p-1 hover:scale-[1.3] duration-300 tooltip tooltip-error"
                          data-tip="Delete"
                        >
                          <RxCross2 className="w-7 h-7  text-red-500" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* done */}
          <h3 className="flex gap-2 items-center text-3xl font-bold my-6 mt-12 ">
            <IoCheckmarkDone className="w-8 h-8  mt-2" /> Done
          </h3>
        </div>
      </section>
    </main>
  );
}

export default MyExercises;
