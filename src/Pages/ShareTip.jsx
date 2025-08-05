import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

const ShareTip = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <div>Loading user...</div>;
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const tipsData = Object.fromEntries(formData.entries());
    tipsData.photoURL = user.photoURL;

    // send data to backend
    fetch("https://sproutly-server.vercel.app/shareTip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tipsData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            background: "#191E24",
            title: "Successfully added",
            text: "Successfully added data in DB",
            icon: "success",
          });
          form.reset();
        }
      });
  }

  return (
    <div className="lg:p-24 pt-5 ">
      <div className="p-12 text-center pt-0">
        <h1 className="text-3xl text-green-400 bolder pb-5">Add New Tips</h1>
        <p>
          Gardening is a journey of continuous learning, and every green thumb
          has a unique trick up their sleeve! Whether it's a secret for
          super-charging your soil, a clever pest deterrent, or an ingenious
          watering hack, your insights can help fellow gardeners flourish. Don't
          keep your wisdom to yourself – share your favorite garden tip with us!
          Let's cultivate a community where everyone's garden can thrive.
        </p>
      </div>
      <form
        onSubmit={handleOnSubmit}
        className="text-4xl font-extrabold text-green-400 mb-6 text-center  "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Title</label>
            <input
              type="text"
              className="input focus:outline-none focus:border-green-500"
              placeholder="Title"
              name="Title"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Email</label>
            <input
              type="text"
              className="input"
              name="Email"
              value={user.email}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Name</label>
            <input
              type="text"
              className="input"
              name="Name"
              value={user.displayName}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Plant Type</label>
            <input
              type="text"
              className="input focus:outline-none focus:border-green-500"
              placeholder="Plant Type"
              name="plantType"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Difficulty Level</label>
            <select
              id="mySelect"
              name="difficulty"
              className="form-select input focus:outline-none focus:border-green-500"
            >
              <option value="">-- Please difficulty --</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Description</label>
            <input
              type="text"
              className="input focus:outline-none focus:border-green-500"
              placeholder="Description"
              name="description"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Category</label>
            <select
              name="category"
              className="form-select input focus:outline-none focus:border-green-500"
            >
              <option value="">-- select category --</option>
              <option value="Composting">Composting</option>
              <option value="Plant Care">Plant Care</option>
              <option value="Vertical Gardening">Vertical Gardening</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Availability</label>
            <select
              name="availability"
              className="form-select input focus:outline-none focus:border-green-500"
            >
              <option value="">-- select Availability --</option>
              <option value="Public">Public</option>
              <option value="Hidden">Hidden</option>
            </select>
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-6">
          <label className="label w-full">Photo URL</label>
          <input
            type="text"
            className="input w-full focus:outline-none focus:border-green-500"
            placeholder="Photo URL"
            name="photoURL"
          />
        </fieldset>
        <input
          type="submit"
          className="btn w-full text-xl font-extrabold text-green-400 rounded-xl pt-2 pb-6 "
          value="Share Tip"
        />
      </form>
    </div>
  );
};

export default ShareTip;
