import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { TiPlus } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";

function ExerciseCard() {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg">
      <div className="w-full h-[284px] overflow-hidden rounded-2xl p-10">
        <img
          className="w-full rounded-2xl h-full bg-cover bg-center object-cover hover:scale-[1.2] duration-1000"
          src="http://d205bpvrqc9yn1.cloudfront.net/0001.gif"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="p-5 bg-white rounded-b-2xl text-left">
        <h5 className="mb-2 text-2xl font-bold tracking-tigh">3/4 sit-up</h5>
        <p className="mb-2 font-normal text-gray-700">
          <strong>Body Part:</strong> waist
        </p>
        <p className="mb-2 font-normal text-gray-700">
          <strong>Equipment:</strong> body weight
        </p>
        <p className="mb-2 font-normal text-gray-700">
          <strong>Target:</strong> abs
        </p>
        <div className="mt-6 flex gap-4 items-center">
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
