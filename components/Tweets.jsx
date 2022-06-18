import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import Tweet from "./Tweet";

const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "tweets"), orderBy("timestamp", "desc")),
      (snapshot) => {
        const tweetsSnapshot = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTweets(tweetsSnapshot);
      }
    );

    return () => {
      return unsubscribe();
    };
  }, [db]);

  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default Tweets;
