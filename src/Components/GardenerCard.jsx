import React from "react";

const GardenerCard = ({ gardener }) => {
  const {
    bio,
    experience,
    name,
    rating,
  } = gardener;

  return (
    <div className="card bg-base-100 w-96 shadow-sm border border-green-300 ">
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-success">Active</div>
        </h2>
        <p>{bio}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline p-3">
            Experience : {experience} years
          </div>
          <div className="badge badge-outline p-3">Rating : {rating}</div>
        </div>
      </div>
    </div>
  );
};

export default GardenerCard;
