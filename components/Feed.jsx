import AddTweet from "./AddTweet";
import Tweets from "./Tweets";
import { SparklesIcon } from "@heroicons/react/outline";
import CommentDialog from "./CommentDialog";
import { useSession } from "next-auth/react";

const Feed = () => {
  const { data: session } = useSession();

  return (
    <div className="w-full">
      {/* Add Tweet  */}
      <div className="fixed w-full md:w-[600px] z-50 top-0">
        <div className="flex items-center justify-between backdrop-blur-sm bg-black/30 h-12 border-x-[1px] border-zinc-700 px-4">
          <h1 className="font-bold text-2xl">Home</h1>
          <SparklesIcon className="h-6 w-6 cursor-pointer " />
        </div>
      </div>
      {/* Add Tweet  */}
      {session?.user && (
        <div className="border-b-[1px] border-zinc-700 w-full md:w-[600px] ">
          <AddTweet />
        </div>
      )}
      {/* Tweets */}
      <div className={!session?.user ? "mt-16 w:full md:w-[600px]" : ""}>
        <Tweets />
      </div>
      {/* Comment Dialog */}
      <CommentDialog />
    </div>
  );
};

export default Feed;
