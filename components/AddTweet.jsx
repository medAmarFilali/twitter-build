import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  PhotographIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  CalendarIcon,
  LocationMarkerIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import { GlobeIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const AddTweet = () => {
  const [tweetText, setTweetText] = useState("");
  const [overLimit, setOverLimit] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const imageInputRef = useRef(null);

  useEffect(() => {
    if (tweetText.length > 280) {
      setOverLimit(true);
    } else {
      setOverLimit(false);
    }
  }, [tweetText]);

  const uploadTweet = async () => {
    if (loading) return;
    if (tweetText.length === 0) return;

    setLoading(true);

    let media = { media: false };

    const docRef = await addDoc(collection(db, "tweets"), {
      text: tweetText,
      usename: session.user.username,
      userId: session.user.uid,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    });

    if (selectedFile) {
      const imageRef = ref(storage, `images/${docRef.id}/image`);

      await uploadString(imageRef, selectedFile, "data_url").then(
        async (snapshot) => {
          const downloadURL = await getDownloadURL(imageRef);
          media = {
            media: true,
            type: "image",
            file: downloadURL,
          };

          await updateDoc(doc(db, "tweets", docRef.id), {
            attachment: media,
          });
        }
      );
    }

    setLoading(false);
    setTweetText("");
    setSelectedFile(null);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readEvent) => {
      setSelectedFile(readEvent.target.result);
    };
  };

  return (
    <div className="px-4 pb-4 mt-16">
      <div className="mt-6 flex space-x-6">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image
            src={
              session?.user?.image
                ? session.user.image
                : "/img/account_placeholder.png"
            }
            alt="Amar FILALI"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="w-full">
          <input
            placeholder="What's happening?"
            className={`bg-black w-full focus:outline-none text-2xl mt-2 ${
              overLimit ? "text-red-600" : "text-white"
            } `}
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
          />
          <input
            type="file"
            hidden
            ref={imageInputRef}
            onChange={addImageToPost}
          />
          {selectedFile && (
            <div className="relative flex justify-center mt-4">
              <div className="relative h-96 w-96 rounded-xl overflow-hidden  ">
                <Image
                  src={selectedFile}
                  layout="fill"
                  objectFit="contain"
                  alt="Image"
                />
                <button
                  className="absolute top-2 left-2 bg-black/30 p-1 rounded-full"
                  onClick={() => setSelectedFile(null)}
                >
                  <XCircleIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}
          <div className="flex items-center justify-between mt-4 cursor-pointer border-b-[1px] border-zinc-700 pb-3">
            <div className="flex items-center space-x-2">
              <GlobeIcon className="h-5 w-5 text-blue-600" />
              <p className="text-sm text-blue-600 font-bold">
                Everyone can reply
              </p>
            </div>
            <p
              className={`text-xs ${
                overLimit ? "text-red-600" : "text-white"
              } `}
            >
              {tweetText.length}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex space-x-4 items-center">
              <PhotographIcon
                className="h-6 w-6 text-blue-600 cursor-pointer"
                onClick={() => imageInputRef.current.click()}
              />
              <ChartBarIcon className="h-6 w-6 text-blue-600 cursor-pointer" />
              <EmojiHappyIcon className="h-6 w-6 text-blue-600 cursor-pointer" />
              <CalendarIcon className="h-6 w-6 text-blue-600 cursor-pointer" />
              <LocationMarkerIcon className="h-6 w-6 text-blue-600 cursor-pointer" />
            </div>
            <button
              className="rounded-full bg-blue-600 disabled:bg-blue-200 hover:bg-blue-700 hover:disabled:bg-blue-200 p-2 w-32"
              onClick={uploadTweet}
              disabled={loading || overLimit}
            >
              {loading ? "Loading..." : "Tweet"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTweet;
