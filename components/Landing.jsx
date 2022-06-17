import Image from "next/image";
import { signIn } from "next-auth/react";

const Landing = ({ providers }) => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="w-full flex ">
        <div className="w-1/2">
          <div className="w-full min-h-screen bg-[url('/img/landing_background.png')] "></div>
        </div>
        <div className="w-1/2 p-8">
          <div className="relative w-12 h-12 ">
            <Image
              src="/img/logo.png"
              layout="fill"
              objectFit="contain"
              alt="Logo twitter"
            />
          </div>
          <div className="mt-24">
            <h1 className="text-7xl">
              It{"'"}s happening <br /> here{" "}
            </h1>
            <h2 className="text-4xl mt-8">Join twitter now</h2>
            <div className="mt-8">
              {Object.values(providers).map((provider) => {
                return (
                  <button
                    onClick={() => signIn(provider.name, { callbackUrl: "/" })}
                    key={provider.id}
                    className="bg-white rounded-full text-black py-4 px-8 flex"
                  >
                    <img
                      src="/img/logo_google_min.png"
                      alt="Logo Google"
                      className="w-6 h-6 mr-4"
                    />
                    Connect with {provider.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
