import Image from 'next/image';

const SignUp = () => {
  return (
    <section className="relative">
      <div className="relative z-10 py-10 px-20">
        <h2 className="text-4xl z-10 mb-6">Experience the Freedom</h2>
        <button className="bg-white rounded-lg px-6 py-3 hover:scale-105 hover:opacity-90 active:scale-95">
          <p className="text-gradiant font-bold">Sign Up Now</p>
        </button>
      </div>

      <Image
        src="/home/singer.png"
        width={320}
        height={295}
        alt="Singer singing song"
        className="absolute bottom-0 right-24 z-10"
      />

      <Image
        src="/home/sign-up-bg.png"
        fill
        objectFit="cover"
        className="mr-10"
        alt=""
      />
    </section>
  );
};

export default SignUp;
