import Image from "next/image";

const CommentItem = ({ comment }) => {
  return (
    <div className="flex justif-between border-b-[1px] border-zinc-600 p-4 space-x-4 ">
      <div className="relative w-12 h-12 rounded-full overflow-hidden ">
        <Image
          src={comment.profileImg}
          layout="fill"
          objectFit="contain"
          alt={comment.name}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <h3 className="font-bold text-md mr-2">{comment.name}</h3>
          <h5 className="font-thin text-md text-zinc-500">
            @{comment.username}
          </h5>
        </div>
        <p>{comment.comment}</p>
      </div>
    </div>
  );
};

export default CommentItem;
