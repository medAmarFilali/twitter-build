import Image from "next/image";
import { HomeIcon, HashtagIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  MailIcon,
  BookmarkIcon,
  ViewListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  PaperAirplaneIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import MenuItem from "./MenuItem";
import { useSession } from "next-auth/react";

const Menu = () => {
  const { data: session } = useSession();

  console.log("Session: ", session);

  return (
    <div className="flex flex-col justify-between space-y-4 h-[calc(100vh-16px)] ">
      {/* Logo */}
      <div className="relative w-8 h-8 mx-4 cursor-pointer">
        <Image
          src="/img/logo.png"
          alt="Twitter logo"
          layout="fill"
          objectFit="contain"
          className="p-4"
        />
      </div>
      {/* Navigation */}
      <div className="flex-1">
        <MenuItem icon={<HomeIcon className="h-8 w-8" />} text="Home" />
        <MenuItem icon={<HashtagIcon className="h-8 w-8" />} text="Explore" />
        <MenuItem
          icon={<BellIcon className="h-8 w-8" />}
          text="Notifications"
        />
        <MenuItem icon={<MailIcon className="h-8 w-8" />} text="Messages" />
        <MenuItem
          icon={<BookmarkIcon className="h-8 w-8" />}
          text="Bookmarks"
        />
        <MenuItem icon={<ViewListIcon className="h-8 w-8" />} text="Lists" />
        <MenuItem icon={<UserIcon className="h-8 w-8" />} text="Profile" />
        <MenuItem
          icon={<DotsCircleHorizontalIcon className="h-8 w-8" />}
          text="More"
        />
        <button className="hidden md:inline-grid text-lg bg-blue-500 hover:bg-blue-600 text-white py-2 my-2 w-full rounded-full transition-all duration-200 ease-out">
          Tweet
        </button>
        <div className="relative md:hidden text-lg w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 my-2 rounded-full transition-all duration-200 ease-out cursor-pointer flex items-center justify-center">
          <PaperAirplaneIcon className="h-8 w-8" />
        </div>
      </div>
      {/* Account */}
      <div>
        <div className="py-2 px-4 hover:bg-zinc-900 rounded-full mb-4 space-x-2 flex items-center justify-between cursor-pointer">
          <div className="relative h-8 w-8 md:h-12 md:w-12 rounded-full overflow-hidden">
            <Image
              src={
                session?.user?.image
                  ? session.user.image
                  : "/img/account_placeholder.png"
              }
              alt="Profile"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex-1 hidden md:block">
            <h3 className="font-bold text-md truncate ">
              {session?.user?.name}
            </h3>
            <h3 className="text-sm text-zinc-400">
              @{session?.user?.username}
            </h3>
          </div>
          <div className="hidden md:block">
            <DotsHorizontalIcon className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
