import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import CommentPage from "../../components/CommentPage";
import Menu from "../../components/Menu";
import Sidebar from "../../components/Sidebar";
import { db } from "../../firebase";
import moment from "moment";
import Layout from "../../components/Layout";

export const getStaticPaths = async () => {
  const docRef = collection(db, "tweets");
  let thePaths = [];

  const docs = await getDocs(docRef);

  docs.forEach((doc) => {
    thePaths.push({
      params: {
        slug: doc.id,
      },
    });
  });
  return { paths: thePaths, fallback: false };
};

export async function getStaticProps({ params }) {
  const docRef = doc(db, "tweets", params.slug);

  const resTweet = await getDoc(docRef);

  const theTweet = {
    id: resTweet.id,
    usename: resTweet.data().usename,
    text: resTweet.data().text,
    profileImg: resTweet.data().profileImg,
    userId: resTweet.data().userId,
    timestamp: moment(resTweet.data().timestamp.toDate()).fromNow(),
  };

  return {
    props: {
      tweet: theTweet,
    },
  };
}

const comment = ({ tweet }) => {
  return (
    <>
      <Layout>
        <section className="w-[600px] ml-20 md:ml-[250px] border-r-[1px] border-zinc-700">
          <CommentPage tweet={tweet} />
        </section>
      </Layout>
    </>
  );
};

export default comment;
