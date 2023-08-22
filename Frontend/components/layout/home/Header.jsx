"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const header = () => {
  const router = useRouter();

  return (
    <header className="flex w-full pl-10 pr-32 mb-24">
      <div className="py-36">
        <h1 className="text-7xl leading-tight font-bold">
          <span className="block">Unleash Your</span>
          <span className="text-gradiant">{" Musical Creativity"}</span>
        </h1>

        <p className="text-gray-500 max-w-xs mt-2">
          The future of music streaming platform that gives you the power to
          build a more equitable{" "}
          <span className="text-gradiant">Music Industry.</span>
        </p>

        <button
          className="px-6 py-3 btn-gradiant rounded-full cursor-pointer font-bold hover:scale-105 active:scale-95 transition-transform duration-150 mt-16"
          onClick={() => router.push("/users/home")}
        >
          Get Started Now
        </button>
      </div>

      <div className="flex-1 h-[750px] w-full max-w-[450px] absolute top-0 right-0">
        <Image
          src="/home/hero-image.png"
          fill
          objectFit="contain"
          objectPosition="top right"
          alt="Animated girl listening to music"
        />
      </div>
    </header>
  );
};

export default header;
