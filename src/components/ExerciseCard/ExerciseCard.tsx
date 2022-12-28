import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { TiPlus } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";

type Prop = {
  exerciseData: {
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    id: string;
    name: string;
    target: string;
  };
};

function ExerciseCard({ exerciseData }: Prop) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl duration-500 hover:-translate-y-2">
      <div className="p-3">
        <div className="w-full h-[394px] overflow-hidden rounded-2xl ">
          <img
            className="w-full rounded-2xl h-full bg-cover bg-center object-cover hover:scale-[1.2] overflow-hidden duration-1000"
            src={exerciseData.gifUrl}
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <div className="p-5 bg-white rounded-b-2xl text-left ">
        <h5 className="mb-2 text-2xl font-bold tracking-tigh">
          {exerciseData.name}
        </h5>
        <p className="mb-2 font-normal text-gray-700">
          <strong>Body Part:</strong> {exerciseData.bodyPart}
        </p>
        <p className="mb-2 font-normal text-gray-700">
          <strong>Equipment:</strong> {exerciseData.equipment}
        </p>
        <p className="mb-2 font-normal text-gray-700">
          <strong>Target:</strong> {exerciseData.target}
        </p>
        <div className="mt-auto flex gap-4 items-center">
          <Link to={""} className="btn btn-primary flex gap-2 items-center">
            Details
            <FaArrowRight />
          </Link>
          <button>
            <PrimaryButton
              txt={
                <span className="flex gap-2 items-center">
                  Add Queue
                  <TiPlus className="w-5 h-5" />
                </span>
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExerciseCard;
