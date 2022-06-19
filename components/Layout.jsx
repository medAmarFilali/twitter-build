import { useState, useEffect } from "react";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import LightLoading from "./LightLoading";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { data: session } = useSession();
  const loading = useSelector((state) => state.loading);
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  return (
    <>
      <div className="bg-black text-white w-full min-h-screen ">
        <div className="flex w-full md:max-w-6xl mx-auto">
          {/* Menu */}
          <section className="w-18 h-full md:w-[250px] pr-4 md:col-span-3 pt-4 border-r-[1px] border-zinc-700 fixed">
            <Menu />
          </section>
          {/* Children Component */}
          {children}
          {/* Sidebase */}
          <section className="w-[500px] hidden md:inline-flex ">
            <Sidebar />
          </section>

          {/* Login now */}
          {!session?.user && (
            <div className="fixed bottom-0 left-0 w-full h-24 px-4 md:h-16 bg-blue-500">
              <div className="flex justify-between h-full items-center max-w-6xl mx-auto">
                <h3 className="font-bold text-xl">
                  Don{"'"}t miss what{"'"}s happening.
                </h3>
                <button
                  className="bg-white rounded-full text-blue-500 font-semibold px-8 py-2"
                  onClick={() => router.push("/auth/signin")}
                >
                  Login now
                </button>
              </div>
            </div>
          )}

          {/* Loading */}
          {loading.light && <LightLoading scrollPosition={scrollPosition} />}
        </div>
      </div>
    </>
  );
};

export default Layout;
