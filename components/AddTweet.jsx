import Image from "next/image";
import {
  PhotographIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  CalendarIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import { GlobeIcon } from "@heroicons/react/solid";

const AddTweet = () => {
  return (
    <div className="px-4 pb-4 mt-16">
      <div className="mt-6 flex space-x-6">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image
            src="/img/profile.jpg"
            alt="Amar FILALI"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="w-full">
          <input
            placeholder="What's happening?"
            className="bg-black w-full color-white focus:outline-none text-2xl mt-2 "
          />
          <div className="flex items-center mt-4 space-x-2 cursor-pointer border-b-[1px] border-zinc-700 pb-3">
            <GlobeIcon className="h-5 w-5 text-blue-600" />
            <p className="text-sm text-blue-600 font-bold">
              Everyone can reply
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex space-x-4 items-center">
              <PhotographIcon className="h-6 w-6 text-blue-600 cursor-pointer" />
              <ChartBarIcon className="h-6 w-6 text-blue-600 cursor-pointer" />
              <EmojiHappyIcon className="h-6 w-6 text-blue-600 cursor-pointer" />
              <CalendarIcon className="h-6 w-6 text-blue-600 cursor-pointer" />
              <LocationMarkerIcon className="h-6 w-6 text-blue-600 cursor-pointer" />
            </div>
            <button className="rounded-full bg-blue-600 hover:bg-blue-700 p-2 w-32">
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTweet;
