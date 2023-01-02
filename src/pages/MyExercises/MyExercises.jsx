import React, { useEffect, useContext, useState } from "react";
import Heading from "../../components/Heading/Heading";
import { BiAddToQueue } from "react-icons/bi";
import { IoCheckmarkDone } from "react-icons/io5";
import QueueCard from "../../components/QueueCard/QueueCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../Contexts/AuthProvider";
import Loading from "../../components/Loading/Loading";
import { toast } from "react-hot-toast";

function MyExercises() {
  const [queuedExercises, setQueuedExercises] = useState([]);
  const [doneExercises, setDoneExercises] = useState([]);

  const { user } = useContext(AuthContext);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["getUserExercises", user],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://fithub-server.vercel.app/exercisesByUser?email=${user?.email}`
      );

      return data;
    },
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (data?.result?.length > 0) {
      const queued = data?.result.filter((el) => el.completed === false);
      setQueuedExercises(queued);
      const done = data?.result.filter((el) => el.completed === true);
      setDoneExercises(done);
    }
  }, [data]);

  console.log(data);

  if (isLoading) {
    return (
      <main className="mt-6 min-h-screen">
        <section className="container">
          <Heading txt="My Exercises" />
          <Loading />
        </section>
      </main>
    );
  }
  if (isError) {
    toast.error(error.message);
    return (
      <main className="mt-6 min-h-screen">
        <section className="container">
          <Heading txt="My Exercises" />
          <h2 className="mt-12 text-2xl lg:text-5xl text-center font-bold text-gray-600">
            No Data Found. Add Some Exercise to Your List!
          </h2>
        </section>
      </main>
    );
  }

  /// if data is came

  if (data) {
    // [], [{}, {}]

    return (
      <main className="mt-12 min-h-screen">
        <section className="container">
          <Heading txt="My Exercises" />
          {queuedExercises?.length > 0 ? (
            <>
              {/* queue div */}
              <div className="">
                <h3 className="flex gap-2 items-center text-3xl font-bold mb-6 sticky top-24 z-10 ">
                  <BiAddToQueue className="w-8 h-8  mt-2" /> Queue
                </h3>
                {/* queue */}
                <div className="grid lg:grid-cols-1 gap-6">
                  {queuedExercises?.map((exercise) => {
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
            </>
          ) : (
            <></>
          )}

          {doneExercises?.length > 0 ? (
            <>
              {/* done div */}
              <div className="mt-12">
                <h3 className="flex gap-2 items-center text-3xl font-bold mb-6 sticky top-24 z-10  ">
                  🎉 Done
                </h3>

                <div className="grid lg:grid-cols-1 gap-6">
                  {doneExercises.map((exercise) => {
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
            </>
          ) : (
            <></>
          )}
        </section>
      </main>
    );
  }
}

export default MyExercises;
