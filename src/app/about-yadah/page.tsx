import Navbar from "@/components/Nav";
import Link from "next/link";

export default function AboutYadah() {
  return (
    <>
      <Navbar />
      <hr className="text-gray-200 mx-5" />
      <div className="w-full flex flex-col items-center justify-center mt-10 px-10">
        <h1 className="text-4xl lg:text-6xl font-bold w-64 lg:w-[30rem] text-center delay-200 animate-pulse">
          <span className="text-orange-600 animate-pulse">Yadah</span> Mega
          Concert <span className="text-orange-600 animate-pulse">2025</span>.
        </h1>
        <p className="lg:text-xl text-center lg:w-[50rem] mt-4">
          In a world of vanity, strife, and hopelessness, there is a light that
          never fades — Elshaddai. The way to reach Him is through praise,
          worship, and prayer. The Yadah MEGA Concert is a divine gathering
          designed to bring people together in worship, to share burdens,
          glorify God, and receive His blessings.
        </p>

        <div className="my-5 flex items-center gap-3">
          <Link
            href={"/signup"}
            className={`bg-orange-600 px-7 lg:px-20 py-3 text-orange-50 rounded-full text-sm font-bold border-2 shadow transition-all duration-500 hover:scale-110`}
          >
            Support Yadah 2025
          </Link>
        </div>
        <div className="w-full h-[400px] my-7 rounded-xl bg-[url('/banner.jpeg')] bg-cover bg-center"></div>
      </div>
    </>
  );
}
