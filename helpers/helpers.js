import { db } from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";

export const getComments = async (id, setComments) => {
  await onSnapshot(collection(db, "tweets", id, "comments"), (snapshot) => {
    const snapshotComments = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setComments(snapshotComments);
  });
};
