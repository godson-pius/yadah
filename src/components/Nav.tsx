"use client";
import React from "react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseLine, RiMenuUnfoldLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [showMobile, setShowMobile] = React.useState<boolean>(false);
  const page = usePathname();

  return (
    <>
      <div
        className={
          "w-full px-10 py-4 bg-white flex justify-between items-center relative"
        }
      >
        {/*<Image src={logo} alt={'logo'} width={140} height={140} />*/}
        <Link href={"/"} className={`${showMobile ? "hidden" : "block"}`}>
          <span className="font-bold text-lg italic">
            <span className="text-orange-600">Yadah</span>Concert.
          </span>
          {/*<img src={"/next.svg"} alt="Logo" width={100} />*/}
        </Link>
        <nav
          className={`gap-5 text-xs font-medium items-center ${showMobile ? "flex" : "hidden lg:flex"}`}
        >
          <Link
            href={"/"}
            className={`group relative overflow-hidden pb-1 ${page === "/" ? "border-b-2" : null}`}
          >
            HOME
            <p
              className={
                "border-b-orange-500 border-b-2 w-full h-full absolute inset-0 transform transition-all -translate-x-full group-hover:translate-x-0 duration-500"
              }
            ></p>
          </Link>

          <Link
            href={"/about-yadah"}
            className={`group relative overflow-hidden pb-1 ${page === "/about-yadah" ? "border-b-2" : null}`}
          >
            ABOUT YADAH
            <p
              className={
                "border-b-orange-500 border-b-2 w-full h-full absolute inset-0 transform transition-all -translate-x-full group-hover:translate-x-0 duration-500"
              }
            ></p>
          </Link>

          <Link
            href={"/memories"}
            className={`group relative overflow-hidden pb-1 ${page === "/memories" ? "border-b-2" : null}`}
          >
            YADAH MEMORIES
            <p
              className={
                "border-b-orange-500 border-b-2 w-full h-full absolute inset-0 transform transition-all -translate-x-full group-hover:translate-x-0 duration-500"
              }
            ></p>
          </Link>

          {/*<Link href={''} className={`group relative overflow-hidden pb-1 ${page === 'contact' ? 'border-b-2' : null}`}>*/}
          {/*    CONTACT*/}
          {/*    <p className={'border-b-orange-500 border-b-2 w-full h-full absolute inset-0 transform transition-all -translate-x-full group-hover:translate-x-0 duration-500'}></p>*/}
          {/*</Link>*/}

          <Link
            href={"/register"}
            className={`bg-[#121d25] glass px-16 py-3 text-orange-50 rounded-full text-sm font-bold border-2 shadow mb-1 ${showMobile ? "hidden" : null}`}
          >
            Register
          </Link>

          <RiCloseLine
            size={25}
            className={
              "absolute right-2 block lg:hidden cursor-pointer text-red-500 "
            }
            onClick={() => setShowMobile(!showMobile)}
          />
        </nav>

        {/*    Mobile*/}
        <HiMenuAlt3
          size={25}
          onClick={() => setShowMobile(true)}
          className={`${showMobile ? "hidden" : "block"} block lg:hidden cursor-pointer`}
        />
      </div>
      {/*<hr className="text-gray-300 mb-" />*/}
    </>
  );
};

export default Navbar;
