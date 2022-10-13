import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const url = `http://localhost:5000/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Add new service</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="enter name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2"
          placeholder="enter description"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="enter price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="enter photo url"
          type="text"
          {...register("img")}
        />

        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
