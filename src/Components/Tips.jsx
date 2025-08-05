import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FcLike } from "react-icons/fc";

const Tips = () => {
  const [datas, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("https://sproutly-server.vercel.app/sharedTips/bestTips")
          .then((res) => res.json())
          .then((data) => setData(data)); // Replace with your API endpoint
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mx-10 ">
      <h1 className="text-4xl font-bold mt-10 text-center text-green-400">
        Best Tips
      </h1>
      <div className="grid grid-cols-1 gap-2 my-5 lg:grid-cols-2 lg:my-10">
        {datas.map((data, index) => (
          <div
            key={index}
            tabIndex={0}
            className="bg-green-400 opacity-90  text-gray-700 focus:bg-success focus:text-black collapse relative"
          >
            <div className="collapse-title font-semibold">{data.Title}</div>
            <div className="collapse-content text-sm mb-5">
              {data.description}
            </div>
            <div className="absolute bottom-5 right-5 flex items-center gap-3">
              <FcLike /> <div>{data.likeCount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
