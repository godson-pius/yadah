import Navbar from "@/components/Nav";
import Link from "next/link";

export default function Memories() {
  return (
    <>
      <Navbar />
      <hr className="text-gray-200 mx-5" />
      <div className="w-full flex flex-col items-center justify-center mt-10 px-10">
        <h1 className="text-4xl lg:text-6xl font-bold w-64 lg:w-[30rem] text-center delay-200">
          <span className="text-orange-600">Yadah</span> Memories
        </h1>
        <p className="lg:text-xl text-center lg:w-[50rem] mt-4">
          These images capture powerful moments from our past events —
          testimonies of joy, encounters of worship, and lives touched by the
          presence of God. Each picture tells a story of faith, unity, and the
          beauty of lifting our voices together to the Lord.
        </p>
        <div className="w-full grid grid-cols-1 md:flex md:flex-wrap items-center my-7 gap-3">
          <div className="bg-amber-200 w-full h-90 md:w-[68%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery2.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery3.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery4.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery5.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery6.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[68%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery7.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery8.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery9.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery10.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery11.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery12.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery13.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery14.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery15.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery16.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery17.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery18.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery19.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery20.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery21.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery22.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery23.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery24.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery25.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery26.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery27.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery28.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery29.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery30.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery31.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery32.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery33.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery34.jpg')] bg-cover bg-center"></div>
          <div className="bg-amber-200 w-full h-90 md:w-[30%] md:h-90 rounded-3xl flex-grow transition-all duration-700 hover:shadow-xl bg-[url('/memories/gallery35.jpg')] bg-cover bg-center"></div>
        </div>
      </div>
    </>
  );
}
