import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "@/firebase";
import { useRouter } from "next/navigation";

export default function OAuth() {
  const router=useRouter();
  const handleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // check user existence in db
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      // case not existed, add to db-users
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      router.push("/")
    } catch (error) {
      toast.error("Authorization with Google failed. Please try again!");
    }
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 text-sm uppercase font-medium
    hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg transition duration-200 ease-in-out rounded"
    >
      {" "}
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
}
