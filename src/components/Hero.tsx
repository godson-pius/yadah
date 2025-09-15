"use client";

import React from "react";
import Link from "next/link";
import { BsChevronDoubleRight } from "react-icons/bs";
import Navbar from "./Nav";

const Hero = () => {
  const [animation, setAnimation] = React.useState(
    "absolute left-0 bottom-7 -translate-x-full",
  );
  const [animation2, setAnimation2] = React.useState(
    "absolute left-0 bottom-7 translate-x-full",
  );
  const [animation3, setAnimation3] = React.useState(
    "h-56 py-20 lg:py-0 lg:w-96 lg:h-full",
  );

  setInterval(() => {
    setAnimation3(
      "h-[100rem] py-32 lg:py-0 lg:h-full lg:w-full rounded-b-xl duration-1000",
    );
  }, 150);

  setInterval(() => {
    setAnimation("translate-x-0 duration-700 transform");
  }, 1000);

  setInterval(() => {
    setAnimation2("translate-x-0 duration-700 transform");
  }, 1700);

  return (
    <div
      className={
        'w-full flex flex-col bg-[url("/bg.jpg")] bg-cover bg-center h-screen'
      }
    >
      <Navbar />
      <section className={"w-full h-full flex flex-col lg:flex-row"}>
        {/*<div
          className={
            'flex flex-col w-full lg:w-[45%] h-96 lg:h-full text-white bg-[url("/banner.jpeg")] bg-cover lg:bg-center justify-end p-7 pt-72 lg:pt-7 group relative overflow-hidden items-end'
          }
        ></div>*/}

        <div
          className={`h-96 lg:py-0 lg:h-full bg-[url("/banner.jpeg")] bg-cover bg-center ${animation3}`}
        ></div>

        <div
          className={
            'flex flex-col w-full justify-end lg:justify-start lg:w-[45%] h-96 lg:h-full text-[#2C3E50] bg-[url("https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdoaXRlJTIwYWJzdHJhY3QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww")] bg-cover bg-center p-7 pt-96 lg:pt-7 group relative overflow-hidden'
          }
        >
          <p className={`${animation2}`}>
            <h1 className="font-bold text-2xl mb-2">
              Yadah Mega Concert - Halal
            </h1>
            The Yadah MEGA Concert is more than just an event; it is a divine
            gathering, a spiritual encounter where hearts unite to glorify God,
            burdens are lifted, and joy overflows. With the theme “Halal”, this
            night will be a holy expression of worship, thanksgiving, and
            surrender to the Lord. Come expectant. Come ready. Come with a heart
            of worship! <br />
            <b>
              <i>
                🗓️ November 14th, 2025 <br /> ⏰ 8PM <br /> 📍 Vee-I-Pee Event
                Centre, New Haven <br />
              </i>{" "}
            </b>
            <Link
              href="/signup"
              className={
                "text-orange-500 pb-1 border-b-[1px] w-max mt-4 font-medium flex items-center gap-1"
              }
            >
              Register
              <BsChevronDoubleRight size={14} />
            </Link>
          </p>
        </div>
      </section>

      {/*<section className={'bg-[url("/hero.webp")] bg-cover shadow-xl border-4 border-white bg-center relative w-full h-52 rounded-t-full'}></section>*/}
    </div>
  );
};

export default Hero;
