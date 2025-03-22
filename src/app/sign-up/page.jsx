"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import Link from "next/link";
import OAuth from "@/components/OAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "@/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  // sign up new user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      updateProfile(auth.currentUser, {
        displayName: formData.name,
      });
      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("Sign up successfully!"); 
      router.push("/");
    } catch (error) {
      // console.log(error);
      toast.error("Something went wrong. Please try again!")
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section>
      <h1 className="mx-auto text-center text-3xl mt-6 font-bold">Sign Up</h1>
      <div className="flex flex-wrap justify-center items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <Image
            className="w-full rounded-2xl"
            src="/sign-in.jpg"
            alt="toronto-city"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={handleSubmit}>
            <input
              className="mb-6 w-full px-4 py-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              placeholder="Full Name"
              type="name"
              id="name"
              onChange={handleChange}
            />
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
            <div className="my-4 flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Have an account?{" "}
                <Link
                  className="ml-1 text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                  href="/sign-in"
                >
                  Sign In
                </Link>
              </p>
              <p>
                <Link
                  className="text-red-600 hover:text-red-800 transition duration-200 ease-in-out"
                  href="/forgot-password"
                >
                  Forgot Password?
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md
             hover:bg-blue-800 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-900"
              type="submit"
            >
              Sign Up
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
