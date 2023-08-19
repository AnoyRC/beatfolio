import Image from "next/image";

const Ripple = () => {
  return (
    <section className="flex justify-between items-center mt-32 mb-40">
      <div className="relative w-[440px] h-[440px]">
        <div className="grow-and-fade animate-growAndFade"></div>
        <div
          className="grow-and-fade animate-growAndFade"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="grow-and-fade animate-growAndFade"
          style={{ animationDelay: "1.6s" }}
        ></div>
        <div
          className="grow-and-fade animate-growAndFade"
          style={{ animationDelay: "2.4s" }}
        ></div>
        <div
          className="grow-and-fade animate-growAndFade"
          style={{ animationDelay: "3.2s" }}
        ></div>

        <Image src="/home/ripple-image.png" fill objectFit="contain" alt="" />
      </div>

      <h2 className="text-7xl font-bold leading-tight">
        <span className="block text-transparent text-stroke">Music is</span>
        <span className="text-gradiant">Decentralized</span>
      </h2>
    </section>
  );
};

export default Ripple;
