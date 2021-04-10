import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex flex-grow w-full p-6 items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          alt=""
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            className="fex-grow w-full focus:outline-none"
            ref={searchInputRef}
            type="text"
          />
          <XIcon
            className="h-7 sm:mr-3  text-gray-500 cursor-pointer transition-duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon
            className="mr-3 h-6 hidden sm:inline-flex
         text-blue-500 border-l-2 pl-4 border-gray-300"
          />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://scontent-dub4-1.xx.fbcdn.net/v/t1.6435-9/135461166_858933254946649_8912077254214778819_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=FBzIs0ZO8x8AX89utGf&_nc_ht=scontent-dub4-1.xx&oh=8980e7b5e9f4deb97e5eeafb6f7ca1ef&oe=6098A37E"
        />
      </div>
      {/** HEADER OPTIONS */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
