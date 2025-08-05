import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const ExploreGardeners = () => {
  const navigation = useNavigate();
  const gardenersData = useLoaderData();


  return (
    <>
      {navigation.state === "loading" ? (
        <span className="loading loading-spinner text-success loading-xl m-50"></span>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-10 ">
            {gardenersData.map((tip, index) => (
              <div
                key={index}
                className="bg-base-200 border border-base-300 rounded-box shadow-lg overflow-hidden  w-80"
              >
                <div className="p-6">
                  <img
                    src={tip.photo}
                    alt={tip.Title}
                    className="w-full h-48 object-cover object-center"
                    loading="lazy"
                  />
                  <h2 className="text-3xl font-bold text-green-400 my-3">
                    {tip.name}
                  </h2>
                  <p className="text-gray-300 mb-4 text-lg">
                    {tip.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-md">
                    <p>
                      <strong className="text-green-400">Age:</strong> {tip.age}
                    </p>
                    <p>
                      <strong className="text-green-400">Gender:</strong>{" "}
                      {tip.gender}
                    </p>
                    <p>
                      <strong className="text-green-400">Status:</strong>{" "}
                      <span
                        className={`font-semibold ${
                          tip.status == "Active"
                            ? "text-green-400"
                            : tip.difficulty === "Inactive"
                            ? "text-yellow-400"
                            : "text-red-400"
                        }`}
                      >
                        {tip.status}
                      </span>
                    </p>
                    <p>
                      <strong className="text-green-400">Tips :</strong>{" "}
                      {tip.total_tips}
                    </p>
                  </div>
                  <div className="mt-4 text-sm text-gray-400">
                    <p>Shared by: {tip.name}</p>
                    <p>Specialty: {tip.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ExploreGardeners;
