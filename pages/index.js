import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/** HEADER */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://scontent-dub4-1.xx.fbcdn.net/v/t1.6435-9/135461166_858933254946649_8912077254214778819_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=FBzIs0ZO8x8AX89utGf&_nc_ht=scontent-dub4-1.xx&oh=8980e7b5e9f4deb97e5eeafb6f7ca1ef&oe=6098A37E" />
        </div>
      </header>

      {/** BODY */}

      <form className="flex flex-col items-center mt-40 flex-grow w-4/5">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
          alt=""
        />

        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg
        max-w-md rounded-full border border-gray-200 px-5 py-3 items-center
        sm:max-w-xl lg: max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="focus: outline-none flex-grow" />
          <MicrophoneIcon className="h-5" />
        </div>

        <div
          className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0
        sm:flex-row sm:space-x-4"
        >
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      {/** FOOTER */}
      <Footer />
    </div>
  );
}

// 33:33
