import { DotsHorizontalIcon } from "@heroicons/react/solid";

const Suggestion = ({ sug }) => {
  return (
    <div className="flex justify-between py-4 cursor-pointer hover:bg-white/5 px-4 ">
      <div>
        <p className="text-xs text-zinc-600 font-semibold">
          {sug.category} . Trending
        </p>
        <p className="font-semibold text-lg leading-8">#{sug.tag}</p>
        <p className="text-sm text-zinc-600 font-semibold">
          {sug.tweets} Tweets
        </p>
      </div>
      <div className="h-6 w-6 rounded-full hover:bg-black/10 flex items-center justify-center ">
        <DotsHorizontalIcon className="h-4 w-4 text-zinc-600 " />
      </div>
    </div>
  );
};

export default Suggestion;
