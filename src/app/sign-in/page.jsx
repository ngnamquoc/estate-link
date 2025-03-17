"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

export default function page() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section>
      <h1 className="mx-auto text-center text-3xl mt-6 font-bold">Sign In</h1>
      <div className="flex flex-wrap justify-center items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <Image
            className="w-full rounded-2xl"
            src="/sign-in.jpg"
            alt="toronto-city"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              className="mb-6 w-full px-4 py-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              placeholder="Email"
              type="email"
              id="email"
              onChange={handleChange}
            />
            <div className="relative ">
              <input
                className=" w-full px-4 py-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                onChange={handleChange}
              />
              {showPassword ? (
                <IoMdEyeOff
                  onClick={() => {
                    setShowPassword((preState) => !preState);
                  }}
                  className="right-3 top-3 absolute text-xl cursor-pointer"
                />
              ) : (
                <IoMdEye
                  onClick={() => {
                    setShowPassword((preState) => !preState);
                  }}
                  className="right-3 top-3 absolute text-xl cursor-pointer"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
