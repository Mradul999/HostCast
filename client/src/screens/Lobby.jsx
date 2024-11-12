import React from "react";

import { useState } from "react";

const Lobby = () => {
  const [formData, setFormData] = useState({ email: "", roomId: "" });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler=(e)=>{
    e.preventDefault();



  }

  console.log(formData);

  return (
    <div className="flex m-10       justify-center mt-44">
      <form onSubmit={submitHandler} className="flex flex-col max-w-lg  w-full  gap-10">
        <h1 className="text-center font-bold text-3xl">Welcome</h1>
        <input
          onChange={changeHandler}
          value={formData.email}
          name="email"
          className=" py-3 text- px-6 border-2 rounded-lg border-black placeholder:text-xl"
          type="email"
          placeholder="Enter your email"
        />
        <input
          onChange={changeHandler}
          value={formData.roomId}
          name="roomId"
          className=" py-3 text- px-6 border-2 rounded-lg border-black placeholder:text-lg"
          type="text"
          placeholder="Enter Room ID"
        ></input>

        <button className="bg-gray-400 rounded-lg py-2 text-white">join</button>
      </form>
    </div>
  );
};

export default Lobby;
