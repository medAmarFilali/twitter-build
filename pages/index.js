import Head from "next/head";
import Feed from "../components/Feed";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import LightLoading from "../components/LightLoading";

export default function Home() {
  const loading = useSelector((state) => state.loading);
  return (
    <div>
      <Head>
        <title>Twitter DZ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black text-white min-h-screen ">
        <div className="flex max-w-6xl mx-auto">
          {/* Menu */}
          <section className="w-18 md:w-[250px] pr-4 md:col-span-3 pt-4 border-r-[1px] border-zinc-700 fixed">
            <Menu />
          </section>
          {/* Feed */}
          <section className="w-[600px] ml-20 md:ml-[250px] border-r-[1px] border-zinc-700">
            <Feed />
          </section>

          {/* Sidebase */}
          <section className="w-[500px]">
            <Sidebar />
          </section>

          {/* Loading */}
          {loading.light && <LightLoading />}
        </div>
      </div>
    </div>
  );
}
