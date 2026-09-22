import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <li className="font-semibold text-lg hover:text-primary">
        <Link href="/">Home</Link>
      </li>
      <li className="font-semibold text-lg hover:text-primary">
        <Link href="/apps">Apps</Link>
      </li>
      <li className="font-semibold text-lg hover:text-primary">
        <Link href="/installation">Installation</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content   z-1 mt-3 w-52 p-2 shadow font-semibold text-2xl"
            >
              {links}
            </ul>
          </div>
          <Link href="/" className="flex gap-1 text-xl">
            <Image src={logo} alt="Logo" width={36} height={36} />
            Hero App
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-between gap-4 px-1 font-semibold text-lg">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary rounded-2xl">Contribute</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
