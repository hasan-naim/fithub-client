import React from "react";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkDone } from "react-icons/io5";
import { BiAddToQueue } from "react-icons/bi";

type Prop = {
  exercise: {
    _id: string;
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    id: string;
    name: string;
    target: string;
  };
  queued?: boolean;
  handleDelete?: any;
};

function QueueCard({ exercise, queued, handleDelete }: Prop) {
  return (
    <div>
      <div className="bg-white max-w-xl h-full rounded-xl px-10 py-8 mx-auto flex gap-6">
        <div className="avatar placeholder items-center">
          <div className="text-neutral-content rounded-lg w-24">
            <img src={exercise.gifUrl} alt="" />
          </div>
        </div>
        <div>
          <h4 className="font-bold uppercase mb-1">{exercise.name}</h4>
          <div className="mb-1">
            <h6>
              <span className="font-bold">Muscle</span>: {exercise.bodyPart}
            </h6>
            <h6>
              <span className="font-bold">Target</span>: {exercise.target}
            </h6>
          </div>
        </div>
        {/* card end */}
        <div className="ml-auto flex flex-col sm:flex-row gap-3">
          {queued ? (
            <button className="">
              <div
                className="bg-green-300/30 rounded-full p-1 hover:scale-[1.3] duration-300 tooltip tooltip-success"
                data-tip="Done"
              >
                <IoCheckmarkDone className="w-7 h-7  text-green-500 " />
              </div>
            </button>
          ) : (
            <button className="">
              <div
                className="bg-primary/20 rounded-full p-1 hover:scale-[1.3] duration-300 tooltip tooltip-secondary"
                data-tip="Queue"
              >
                <BiAddToQueue className="w-7 h-7" />
              </div>
            </button>
          )}
          <button>
            <div
              className="bg-red-300/30 rounded-full p-1 hover:scale-[1.3] duration-300 tooltip tooltip-error cursor-pointer"
              data-tip="Delete"
              onClick={() => handleDelete(exercise._id)}
            >
              <RxCross2 className="w-7 h-7  text-red-500" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default QueueCard;
