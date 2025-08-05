import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router";
import NoDataFound from "../Components/NoDataFound";

const MyTips = () => {
  const { user } = useContext(AuthContext);
  const [allData, setAllData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    if (!user) return;
    const fetchData = async () => {
      try {
        await fetch(`https://sproutly-server.vercel.app/myTips/${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            setAllData(data);
            setCurrentData(data);
          });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (loading) {
    return (
      <div>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function handleDeleteBtn(id) {
    Swal.fire({
      background: "#191E24",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EB5971",
      cancelButtonColor: "#00bf83",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sproutly-server.vercel.app/myTips/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const afterDelete = allData.filter(
                (singleData) => singleData._id !== id
              );

              setAllData(afterDelete);
              setCurrentData(afterDelete);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                background: "#191E24",
              });
            }
          });
      }
    });
  }

  return (
    <div>
      <div className="flex gap-10 justify-center items-center">
        <div className="container mx-auto lg:p-6">
          <div>
            {currentData.length > 0 ? (
              currentData.map((tip, index) => (
                <div
                  className="flex flex-col lg:flex-row m-5 border border-green-200"
                  key={index}
                >
                  <div className="bg-base-200 border border-base-300 rounded-box shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 lg:w-120 px-5">
                    <div className="lg:p-6 py-4">
                      <h2 className="text-3xl font-bold text-green-400 mb-3">
                        {tip.Title}
                      </h2>

                      <div className="grid grid-cols-2 gap-2 text-md">
                        <p>
                          <strong className="text-green-400">Category:</strong>{" "}
                          {tip.category}
                        </p>
                        <p>
                          <strong className="text-green-400">
                            Plant Type:
                          </strong>{" "}
                          {tip.plantType}
                        </p>
                        <p>
                          <strong className="text-green-400">
                            Difficulty:
                          </strong>{" "}
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
                          <strong className="text-green-400">
                            Availability:
                          </strong>{" "}
                          {tip.availability}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative lg:w-8/12 ">
                    <h1 className="text-3xl font-bold text-green-500 mt-2">
                      {tip.Title}
                    </h1>
                    <p className="m-5 mb-20  text-gray-400 text-xl">
                      Gardening is a multifaceted and deeply rewarding endeavor
                      that transcends the simple act of growing plants; it's a
                      communion with nature, a tangible expression of care, and
                      a continuous lesson in patience and resilience. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      lorem100
                    </p>
                    <Link to={`/editTip/${tip._id}`}>
                      <button className="btn btn-success  absolute right-5 bottom-5 text-3xl transition-transform duration-300 hover:scale-120">
                        <CiEdit />
                      </button>
                    </Link>

                    <button
                      className="btn btn-error absolute bottom-5 right-25 text-3xl transition-transform duration-300 hover:scale-120"
                      onClick={() => handleDeleteBtn(tip._id)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <NoDataFound></NoDataFound>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTips;
