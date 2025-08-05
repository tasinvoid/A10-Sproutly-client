import React, { useReducer, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";

const BrowseTips = () => {
  const [difficulty,setDifficulty] = useState()
  const navigation = useNavigate();
  const browseTipsData = useLoaderData();
  function handleChange(e){
    setDifficulty(e.target.value)

  }

  return (
    <>
      {navigation.state === "loading" ? (
        <span className="loading loading-spinner text-success loading-xl m-50"></span>
      ) : (
        <>
          <div>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label w-full">Difficulty Level</label>
              <select
                id="mySelect"
                name="difficulty"
                className="form-select input focus:outline-none focus:border-green-500"
                onChange={handleChange}
              >
                <option value="">-- Please difficulty --</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </fieldset>
            <div className="lg:overflow-x-auto lg:px-50  my-10">
              <table className="table border border-green-400">
                {/* head */}
                <thead>
                  <tr className="border border-green-400 text-center">
                    <th className="hidden lg:block">Number</th>
                    <th>Name</th>
                    <th>Tip</th>
                    <th className="hidden lg:block">Category</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {browseTipsData.map((userData, index) => (
                    <tr key={index} className="border border-green-400">
                      <th className="hidden lg:block">{index + 1}</th>
                      <td>
                        <div className="flex flex-col text-center lg:flex-row items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={`${userData.photoURL}`}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div className="relative">
                            <div className="font-bold">{userData.Name}</div>
                            <div className="text-sm opacity-50 absolute">
                              {userData.Email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="hidden lg:block">
                        {userData.Title}
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          {userData.plantType}
                        </span>

                        <span
                          className={`font-semibold ${
                            userData.difficulty == "Easy"
                              ? "text-green-400"
                              : userData.difficulty === "Medium"
                              ? "text-yellow-400"
                              : "text-red-400"
                          } badge `}
                        >
                          {userData.difficulty}
                        </span>
                      </td>

                      <td>{userData.category}</td>
                      <th>
                        <Link to={`/browseTips/${userData._id}`}>
                          <button className="btn btn-success btn-xs my-10">
                            details
                          </button>
                        </Link>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BrowseTips;
