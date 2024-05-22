// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";

export function CourseDescription() {
  const { state } = useLocation();

  const navigate = useNavigate()

  const { role, data } = useSelector((state) => state.auth);

//   useEffect(() => {
//     console.log(state);
//     console.log(role);
//     console.log(data);
//   }, []);

  return (
    <HomeLayout>
      <div className="min-h-[90vh] pt-12 px-20 flex flex-col items-center justify-center text-white">
        <div className="grid grid-cols-2 gap-10 py-10 relative">
          <div className="space-y-5">
            {/* discription image  */}
            <img
              className="w-full h-64 rounded-md"
              src={state?.thumbnail?.secure_url}
              alt="thumbnail"
            />

            <div className="space-y-4">
              <div className="flex flex-col items-center justify-between text-xl ">
                <p className="font-semibold">
                  <span className="text-yellow-500 font-bold">
                    Total lectures :{" "}
                  </span>
                  {state?.numberOfLectures}
                </p>

                <p className="font-semibold">
                  <span className="text-yellow-500 font-bold">
                    Instructor :{" "}
                  </span>
                  {state?.createdBy}
                </p>
              </div>

              {role === "ADMIN" || data?.subscription?.status === "active" ? (
                <button onClick={() => navigate("/course/displaylecture", {state: {...state}})} className="bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300">
                  Watch lectures
                </button>
              ) : (
                <button onClick={() => navigate("/checkout")} className="bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300">
                  Subscribe
                </button>
              )}
            </div>
          </div>

          <div className="space-y-2 text-xl">
            <h1 className="text-3xl font-bold text-yellow-500 mb-4 text-center">{state?.title}</h1>
            <p className="text-yellow-500 ">Course description : </p>
            <p>{state?.description}</p>
          </div>


        </div>
      </div>
    </HomeLayout>
  );
}
