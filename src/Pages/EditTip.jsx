import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const EditTip = () => {
  const tipToEdit = useLoaderData();
  const {
    Email,
    Name,
    Title,
    availability,
    category,
    description,
    difficulty,
    photoURL,
    plantType,
    _id,
  } = tipToEdit[0];
  function handleOnSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const tipsData = Object.fromEntries(formData.entries());

    // send data to backend
    fetch(`https://sproutly-server.vercel.app/editTip/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tipsData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          background: "#191E24",
          title: "Successfully added",
          text: "Successfully added data in DB",
          icon: "success",
        });
        form.reset();
      });
  }
  return (
    <div>
      <div className="my-5">
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
                defaultValue={Title}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label w-full">Email</label>
              <input type="text" className="input" name="Email" value={Email} />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label w-full">Name</label>
              <input type="text" className="input" name="Name" value={Name} />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label w-full">Plant Type</label>
              <input
                type="text"
                className="input focus:outline-none focus:border-green-500"
                placeholder="Plant Type"
                name="plantType"
                defaultValue={plantType}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label w-full">Difficulty Level</label>
              <select
                id="mySelect"
                name="difficulty"
                className="form-select input focus:outline-none focus:border-green-500"
                defaultValue={difficulty}
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
                defaultValue={description}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label w-full">Category</label>
              <select
                name="category"
                className="form-select input focus:outline-none focus:border-green-500"
                defaultValue={category}
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
                defaultValue={availability}
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
              defaultValue={photoURL}
            />
          </fieldset>
          <input
            type="submit"
            className="btn w-full text-xl font-extrabold text-green-400 rounded-xl"
            value="Update Tip"
          />
        </form>
      </div>
    </div>
  );
};

export default EditTip;
