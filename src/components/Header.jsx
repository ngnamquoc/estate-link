"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="bg-white border-b shadow-md sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <Link href="/">
            <img className="h-20 cursor-pointer" src="/logo.png" alt="logo" />
          </Link>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li>
              <Link
                href="/"
                className={clsx(" py-7 font-semibold  ", {
                  "text-blue-500 border-b-[3px] hover:text-blue-700 ":
                    pathname === "/",
                  " text-gray-400 border-b-transparent": pathname !== "/",
                })}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/offer"
                className={clsx(" py-7 font-semibold ", {
                  "text-blue-500 border-b-[3px] hover:text-blue-700 ":
                    pathname === "/offer",
                  " text-gray-400 border-b-transparent hover:text-black":
                    pathname !== "/offer",
                })}
              >
                Offers
              </Link>
            </li>
            <li>
              <Link
                href="/sign-in"
                className={clsx(" py-7 font-semibold ", {
                  "text-blue-500 border-b-[3px] hover:text-blue-700 ":
                    pathname === "/sign-in",
                  " text-gray-400 border-b-transparent hover:text-black":
                    pathname !== "/sign-in",
                })}
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
