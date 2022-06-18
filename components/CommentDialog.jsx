import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeCommentDialog } from "../store/actions/commentDialogAction";
import Image from "next/image";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { useSession } from "next-auth/react";

const CommentDialog = () => {
  const [tweet, setTweet] = useState({});
  const [comment, setComment] = useState("");
  const isOpen = useSelector((state) => state.commentDialog.isOpen);
  const tweetId = useSelector((state) => state.commentDialog.id);
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const getTweet = async () => {
    if (isOpen) {
      const docRef = doc(db, "tweets", tweetId);

      const res = await getDoc(docRef);

      const theTweet = {
        id: res.id,
        ...res.data(),
      };

      setTweet(theTweet);
    }
  };

  useEffect(() => {
    getTweet();
  }, [isOpen]);

  const closeModal = () => {
    dispatch(closeCommentDialog());
  };

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "tweets", tweet.id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      name: session.user.name,
      userId: session.user.uid,
      timestamp: serverTimestamp(),
    });
    closeModal();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white bg-opacity-10" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black text-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* Tweet preview */}
                  <div className="mt-2 flex justify-between space-x-4 ">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={
                          tweet?.profileImg
                            ? tweet.profileImg
                            : "/img/account_placeholder.png"
                        }
                        layout="fill"
                        objectFit="contain"
                        alt={tweet.usename}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="font-bold text-md mr-2">
                          {tweet.usename}
                        </h3>
                        <h2 className="font-thing text-md text-zinc-500">
                          @{tweet.usename}
                        </h2>
                      </div>
                      <div className="flex-1">{tweet.text}</div>
                    </div>
                  </div>
                  {/* Comment form */}
                  <div className="flex justify-between items-center space-x-4 mt-8">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={
                          session?.user?.image
                            ? session.user.image
                            : "/img/account_placeholder.png"
                        }
                        layout="fill"
                        objectFit="contain"
                        alt={session?.user?.name}
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        className="w-full bg-black text-white focus:outline-none"
                        placeholder="Tweet your reply"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* Submit button */}
                  <div className="flex justify-end mt-8">
                    <button
                      className="rounded-full bg-blue-600 disabled:bg-blue-200 hover:bg-blue-700 hover:disabled:bg-blue-200 p-2 w-32"
                      disabled={!comment.trim()}
                      onClick={sendComment}
                    >
                      Reply
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CommentDialog;
