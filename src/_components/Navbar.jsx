"use client"
import Link from "next/link";


export default function Navbar() {
  return (
    <nav className=" w-2/3 h-20 rounded-2xl border  border-zinc-300 shadow-md ">
      <div className="flex justify-between items-center  ">
        {/* LOGO */}
        <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center ">
          <Link href="/" className="text-xl uppercase font-bold">
            Dhruv.
          </Link>
        </div>

        <div className="">
          <li></li>
          <li></li>
          <li></li>
        </div>
      </div>
    </nav>
  );
}
