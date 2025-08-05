import React from "react";
import { useLoaderData } from "react-router";
import { FcLike } from "react-icons/fc";
import Swal from "sweetalert2";
import { useState } from "react";

const TipsDetails = () => {
  const loadedTips = useLoaderData();

  const [tipsData, setTipsData] = useState(loadedTips);
  if (!loadedTips) return;
  console.log(tipsData);
  function handleLikeBtn(id) {
    const tip = tipsData.find((t) => t._id === id);
    if (!tip) return;
    const updatedLikeCount = tip.likeCount + 1;

    fetch(`https://sproutly-server.vercel.app/sharedTips/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likeCount: updatedLikeCount }),
    })
      .then((res) => res.json())
      .then(() => {
        // Update UI
        setTipsData((prev) =>
          prev.map((t) =>
            t._id === id ? { ...t, likeCount: updatedLikeCount } : t
          )
        );
        Swal.fire({
          background: "#191E24",
          title: "Successfully Liked",
          text: "Successfully added data in DB",
          icon: "success",
        });
      });
  }
  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
      <div className="container mx-auto p-6">
        <div>
          {tipsData.map((tip, index) => (
            <div
              key={index}
              className="bg-base-200 border border-base-300 rounded-box shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 "
            >
              <img
                src={tip.photoURL}
                alt={tip.Title}
                className="w-48 h-48 object-cover object-center m-10"
              />
              <div className="p-6">
                <h2 className="text-3xl font-bold text-green-400 mb-3">
                  {tip.Title}
                </h2>
                <p className="text-gray-300 mb-4 text-lg">{tip.description}</p>
                <div className="grid grid-cols-2 gap-2 text-md">
                  <p>
                    <strong className="text-green-400">Category:</strong>{" "}
                    {tip.category}
                  </p>
                  <p>
                    <strong className="text-green-400">Plant Type:</strong>{" "}
                    {tip.plantType}
                  </p>
                  <p>
                    <strong className="text-green-400">Difficulty:</strong>{" "}
                    <span
                      className={`font-semibold ${
                        tip.difficulty === "Easy"
                          ? "text-green-400"
                          : tip.difficulty === "Medium"
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      {tip.difficulty}
                    </span>
                  </p>
                  <p>
                    <strong className="text-green-400">Availability:</strong>{" "}
                    {tip.availability}
                  </p>
                </div>
                <div className="mt-4 text-sm text-gray-400">
                  <p>Shared by: {tip.Name}</p>
                  <p>Contact: {tip.Email}</p>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-green-500 text-center">
                  Gardening Tips
                </h1>
                <p className="m-10 transition-transform duration-300 hover:scale-105 text-gray-400 text-xl">
                  {tip.description}
                </p>
                <button
                  className="btn bg-green-400 p-10  flex gap-3 text-2xl items-center mr-10 ml-auto mb-10"
                  onClick={() => handleLikeBtn(tip._id)}
                >
                  <FcLike />
                  <div> {tip.likeCount}</div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TipsDetails;
