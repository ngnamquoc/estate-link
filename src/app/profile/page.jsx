"use client";
import React, { useState } from "react";

export default function page() {
  const [formData, setFormData] = useState({
    name: "William",
    email: "Nguyen@gmail.com",
  });
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input
              type="text"
              id="name"
              value={formData.name}
              className=" mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
              disabled
            />
            <input
              type="email"
              id="email"
              value={formData.email}
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
              disabled
            />
            <div className="flex justify-between whitespace-nowrap mb-6 text-sm md:text-lg">
              <p className="flex items-center ">Do you want to change your name? <span className="text-orange-600 hover:text-orange-800 transition ease-in-out duration-200 ml-1 cursor-pointer">Edit</span></p>
              <p className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 ml-1 cursor-pointer">Sign Out</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
