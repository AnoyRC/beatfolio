import Image from 'next/image';

const About = () => {
  return (
    <section className="p-1 mx-auto flex w-fit">
      <div className="mr-10">
        <div className="px-10 py-12 w-[480px] bg-gray-900/50 shadow shadow-white mb-10">
          <h2 className="font-bold text-4xl">It’s all about the Music</h2>

          <div className="my-10">
            <p>
              It’s the universal language of emotions, has the power to stir
              hearts, ignite passions, and paint vivid memories with its
              harmonious melodies.
            </p>
            <br />
            <p>
              Step into the realm of decentralized music streaming with{' '}
              <span className="font-bold text-gradiant">Beatfolio</span>, where
              innovation meets artistry, and together, we unite the masters of
              music in a harmonious journey of creativity and expression.{' '}
              <span className="font-bold text-gradiant">
                Welcome to the future of music!
              </span>
            </p>
          </div>

          <button className="p-3 border border-white rounded-md">
            Explore Music
          </button>
        </div>

        <div className="relative w-[480px] h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/home/singer-2.png"
            alt="Singer MIQUELA"
            fill
            objectFit="cover"
          />

          <p className="absolute px-2 py-1 bottom-12 right-0 translate-x-14 bg-gray-900/50 -rotate-90 text-2xl font-serif">
            @MIQUELA
          </p>
        </div>
      </div>

      <div>
        <div className="relative w-[480px] h-[630px] rounded-lg overflow-hidden mb-10">
          <Image
            src="/home/singer-1.png"
            alt="Singer Rac"
            fill
            objectFit="cover"
          />

          <p className="absolute px-2 py-1 bottom-5 right-0 translate-x-6 bg-gray-900/50 -rotate-90 text-2xl font-serif">
            @RAC
          </p>
        </div>

        <div className="flex gap-10">
          <div className="relative w-[220px] h-[350px] rounded-lg overflow-hidden">
            <Image
              src="/home/singer-3.png"
              alt="Singer ALINABARAZ"
              fill
              objectFit="cover"
            />

            <p className="absolute px-2 py-1 bottom-[72px] right-0 translate-x-20 bg-gray-900/50 -rotate-90 text-2xl font-serif">
              @ALINABARAZ
            </p>
          </div>

          <div className="relative w-[220px] h-[350px] rounded-lg overflow-hidden">
            <Image
              src="/home/singer-4.png"
              alt="Singer SKRILLEX"
              fill
              objectFit="cover"
            />

            <p className="absolute px-2 py-1 bottom-14 right-0 translate-x-16 bg-gray-900/50 -rotate-90 text-2xl font-serif">
              @SKRILLEX
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
