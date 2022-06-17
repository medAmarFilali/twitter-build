import AddTweet from "./AddTweet";
import Tweets from "./Tweets";
import { SparklesIcon } from "@heroicons/react/outline";

const Feed = () => {
  return (
    <div>
      {/* Add Tweet  */}
      <div className="fixed w-[600px] z-50 top-0">
        <div className="flex items-center justify-between backdrop-blur-sm bg-black/30 h-12 border-x-[1px] border-zinc-700 px-4">
          <h1 className="font-bold text-2xl">Home</h1>
          <SparklesIcon className="h-6 w-6 cursor-pointer " />
        </div>
      </div>
      <div className="border-b-[1px] border-zinc-700 w-[600px] ">
        <AddTweet />
      </div>
      {/* Tweets */}
      <div>
        <Tweets />
      </div>
    </div>
  );
};

export default Feed;
