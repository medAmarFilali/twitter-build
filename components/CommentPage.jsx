import { useState, useEffect } from "react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Tweet from "./Tweet";
import CommentDialog from "./CommentDialog";
import CommentItem from "./CommentItem";
import { getComments } from "../helpers/helpers";
import { useDispatch } from "react-redux";
import { closeLightLoading } from "../store/actions/loadingActions";

const CommentPage = ({ tweet }) => {
  const [comments, setComments] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    getComments(tweet.id, setComments);
    dispatch(closeLightLoading());
  }, []);

  return (
    <div className="w-[600px]">
      {/* Comment Dialog */}
      <CommentDialog />
      {/* Feed header */}
      <div className="fixed w-[600px] z-50 top-0">
        <div className="flex items-center justify-start space-x-4 backdrop-blur-sm bg-black/30 h-12 border-x-[1px] border-zinc-700 px-4">
          <div
            className="rounded-full w-10 h-10 cursor-pointer hover:bg-white/10 flex items-center justify-center"
            onClick={() => router.push("/")}
          >
            <ArrowLeftIcon className="h-4 w-4" />
          </div>
          <h1 className="font-bold text-2xl">Tweet</h1>
        </div>
        <Tweet tweet={tweet} single />
        <div>
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentPage;
