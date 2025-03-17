"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OAuth from "@/components/OAuth";

export default function page() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <section>
      <h1 className="mx-auto text-center text-3xl mt-6 font-bold">
        Forgot Password
      </h1>
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

            <div className="my-4 flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have an account?{" "}
                <Link
                  className="ml-1 text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                  href="/sign-up"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  className="text-red-600 hover:text-red-800 transition duration-200 ease-in-out"
                  href="/sign-in"
                >
                  Sign in instead
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md
             hover:bg-blue-800 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-900"
              type="submit"
            >
              Send Reset Password
            </button>
            <div
              className="my-4 flex items-center before:border-t before:flex-1 before:border-gray-300
          after:border-t after:flex-1 after:border-gray-300
          "
            >
              <p className="text-center font-semibold mx-4 ">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
