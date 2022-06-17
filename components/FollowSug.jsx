import Image from "next/image";

const FOLLOW_SUGGESTIONS = [
  {
    id: 1,
    avatar: "/img/tailwind.png",
    name: "Tailwind CSS",
    username: "tailwindcss",
  },
  {
    id: 2,
    avatar: "/img/vercel.png",
    name: "Vercel",
    username: "vercel",
  },
];

const FollowSug = () => {
  return (
    <div className="mt-8 rounded-xl bg-zinc-900 pt-2 ">
      <h3 className="text-xl font-bold px-4 mb-4">Who to follow</h3>
      <div>
        {FOLLOW_SUGGESTIONS.map((follow) => (
          <div
            key={follow.id}
            className="flex justify-between items-center p-4 space-x-4"
          >
            <div className="relative h-10 w-10 rounded-full overflow-hidden cursor-pointer">
              <Image
                src={follow.avatar}
                layout="fill"
                objectFit="contain"
                alt={follow.username}
              />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-md">{follow.name}</p>
              <p className="text-sm text-zinc-600 ">@{follow.username}</p>
            </div>
            <button className="rounded-full bg-white text-black py-2 px-4 font-semibold ">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowSug;
