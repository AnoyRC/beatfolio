import Image from 'next/image';

const Ripple = () => {
  return (
    <section className="flex justify-between items-center mt-32">
      <div class="relative w-[440px] h-[440px]">
        <div class="grow-and-fade animate-growAndFade"></div>
        <div
          class="grow-and-fade animate-growAndFade"
          style={{ animationDelay: '0.8s' }}
        ></div>
        <div
          class="grow-and-fade animate-growAndFade"
          style={{ animationDelay: '1.6s' }}
        ></div>
        <div
          class="grow-and-fade animate-growAndFade"
          style={{ animationDelay: '2.4s' }}
        ></div>
        <div
          class="grow-and-fade animate-growAndFade"
          style={{ animationDelay: '3.2s' }}
        ></div>

        <Image src="/home/ripple-image.png" fill objectFit="contain" />
      </div>

      <h2 className="text-7xl font-bold leading-tight">
        <span className="block text-transparent text-stroke">Music is</span>
        <span className="text-gradiant">Decentralized</span>
      </h2>
    </section>
  );
};

export default Ripple;
