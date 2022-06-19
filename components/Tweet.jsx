import { useState, useEffect } from "react";
import {
  AnnotationIcon,
  DotsHorizontalIcon,
  HeartIcon,
  RefreshIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { openCommentDialog } from "../store/actions/commentDialogAction";
import { useRouter } from "next/router";
import { getComments } from "../helpers/helpers";
import { openLightLoading } from "../store/actions/loadingActions";

const Tweet = ({ tweet, single }) => {
  const [comments, setComments] = useState([]);
  const [likeHover, setLikeHover] = useState(false);
  const [retweetHover, setRetweetHover] = useState(false);
  const [commentHover, setCommentHover] = useState(false);
  const [shareHover, setShareHover] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    getComments(tweet.id, setComments);
  }, []);

  const handleCommentDialog = (e, id) => {
    e.stopPropagation();
    dispatch(openCommentDialog(id));
  };

  const openTweet = () => {
    dispatch(openLightLoading());
    router.push(`/comment/${tweet.id}`);
  };
  return (
    <div className="cursor-pointer" onClick={openTweet}>
      <div className="flex justify-between space-x-4 p-4 border-b-[1px] border-zinc-600">
        <div className="relative  w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={tweet.profileImg}
            layout="fill"
            objectFit="contain"
            alt={tweet.usename}
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <div className="flex items-center">
                <h3 className="font-bold text-md mr-2">{tweet.usename}</h3>
                <h5 className="font-thin text-md text-zinc-500">
                  @{tweet.usename}
                </h5>
              </div>
            </div>
            <div>
              <DotsHorizontalIcon className="h-5 w-5 text-zinc-500 " />
            </div>
          </div>
          <div className="flex-1">
            <p>{tweet.text}</p>
          </div>
          {tweet.attachment && (
            <div className="mt-8 w-full flex justify-center ">
              <img
                src={tweet.attachment.file}
                alt={tweet.usename}
                className="rounded-xl w-full"
              />
            </div>
          )}
          {/* Date section */}
          {single && (
            <div className="text-xs text-zinc-500 mt-4">{tweet.timestamp}</div>
          )}
          {/* Icons section */}
          <div
            className={`${
              single ? "mt-1" : "mt-4"
            } flex space-x-2 md:space-x-16`}
          >
            <div
              className="flex md:space-x-2 items-center text-zinc-500 cursor-pointer"
              onMouseEnter={() => setCommentHover(true)}
              onMouseLeave={() => setCommentHover(false)}
              onClick={(e) => handleCommentDialog(e, tweet.id)}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  commentHover && "bg-zinc-900"
                }`}
              >
                <AnnotationIcon
                  className={`h-5 w-5 ${commentHover && "text-blue-600"}`}
                />
              </div>
              <p className={`text-sm ${commentHover && "text-blue-600"} `}>
                {comments.length > 0 && comments.length}
              </p>
            </div>
            <div
              className="flex md:space-x-2 items-center text-zinc-500 cursor-pointer"
              onMouseEnter={() => setRetweetHover(true)}
              onMouseLeave={() => setRetweetHover(false)}
            >
              <div
                className={`w-10 h-10 rounded-full hover:bg-zinc-900 flex items-center justify-center ${
                  retweetHover && "bg-zinc-900"
                }`}
              >
                <RefreshIcon
                  className={`h-5 w-5 ${retweetHover && "text-green-600"} `}
                />
              </div>
              <p className={`text-sm ${retweetHover && "text-green-600"} `}>
                2
              </p>
            </div>
            <div
              className="flex md:space-x-2 items-center text-zinc-500 cursor-pointer"
              onMouseEnter={() => setLikeHover(true)}
              onMouseLeave={() => setLikeHover(false)}
            >
              <div
                className={`w-10 h-10 rounded-full hover:bg-zinc-900 flex items-center justify-center ${
                  likeHover && "bg-zinc-900"
                }`}
              >
                <HeartIcon
                  className={`h-5 w-5 ${likeHover && "text-pink-600"} `}
                />
              </div>
              <p className={`text-sm ${likeHover && "text-pink-600"} `}>128</p>
            </div>
            <div
              className="flex md:space-x-2 items-center text-zinc-500 cursor-pointer"
              onMouseEnter={() => setShareHover(true)}
              onMouseLeave={() => setShareHover(false)}
            >
              <div
                className={`w-10 h-10 rounded-full hover:bg-zinc-900 flex items-center justify-center ${
                  shareHover && "bg-zinc-900"
                }`}
              >
                <UploadIcon
                  className={`h-5 w-5 ${shareHover && "text-blue-600"} `}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
