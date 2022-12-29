import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import Heading from "../../components/Heading/Heading";
import Loading from "../../components/Loading/Loading";

type ExerciseObject = {
  _id: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
};

function Exercises() {
  const { error, data, isLoading, isError, refetch } = useQuery({
    queryKey: ["fetchAllExercises"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/allExercises");
      return res.data;
    },
  });

  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchTxt, setSearchTxt] = useState<string>("");
  const [fetchExercises, setFetchExercises] = useState([]);

  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);

  if (isError && error instanceof Error) {
    return (
      <main className="mt-6">
        <div className="container">
          <Heading txt="Exercises" />
          <div>{error.message}</div>
        </div>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="mt-6">
        <div className="container">
          <Heading txt="Exercises" />
          <Loading />
        </div>
      </main>
    );
  }

  if (data) {
    const exercisePerPage = 9;
    const lastExercise: number = pageNumber * exercisePerPage;
    const firstExercise: number = lastExercise - exercisePerPage;

    const searchedExercises = data.filter((exercise: ExerciseObject) => {
      return (
        exercise.name.toLowerCase().includes(searchTxt) ||
        exercise.bodyPart.toLowerCase().includes(searchTxt) ||
        exercise.target.toLowerCase().includes(searchTxt) ||
        exercise.equipment.toLowerCase().includes(searchTxt)
      );
    });
    console.log(searchedExercises);

    const exercises: ExerciseObject[] = searchedExercises.slice(
      firstExercise,
      lastExercise
    );

    // [1, 2, 3 ,4, 5]

    const onPageChange = (prevOrNext: string) => {
      switch (prevOrNext) {
        case "prev":
          setPageNumber((prev) => (prev === 1 ? prev : prev - 1));
          break;
        case "next":
          setPageNumber((prev) =>
            searchedExercises.length > lastExercise ? prev + 1 : prev
          );

          break;

        default:
          break;
      }

      window.scroll({ top: 0, behavior: "smooth" });
    };

    return (
      <main className="mt-6">
        <div className="container">
          <Heading txt="Exercises" />
          <div className="form-control mb-6 mx-auto text-center ">
            <div className="input-group w-fit shadow-primaryBtnShadow mx-auto rounded-lg">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered bg-white w-[300px] font-medium max-w-[100vw]"
                value={searchTxt}
                onChange={(e) => {
                  setSearchTxt(e.target.value.toLowerCase());
                  setPageNumber(1);
                }}
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exercises?.map((exercise: ExerciseObject) => {
              return (
                <ExerciseCard key={exercise._id} exerciseData={exercise} />
              );
            })}
          </div>
          <div className="text-center">
            <div className="btn-group mx-auto  shadow-primaryBtnShadow my-6">
              <button className="btn" onClick={() => onPageChange("prev")}>
                «
              </button>
              <button className="btn rounded-none hover:rounded-none">
                {pageNumber}
              </button>
              <button className="btn" onClick={() => onPageChange("next")}>
                »
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Exercises;
