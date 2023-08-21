import Image from 'next/image';

const ProfileHero = ({ coverImage, profileImage }) => {
  return (
    <section>
      <div className="bg-gray-300 h-44 relative">
        <Image
          src={coverImage && coverImage}
          fill
          alt="Cover Image"
          objectFit="cover"
        />

        <div className="absolute -bottom-16 left-4 w-[150px] h-[150px]">
          <Image
            src={profileImage ? profileImage : '/placeholder.png'}
            fill
            objectFit="cover"
            alt="Profile Image"
            className="rounded-full border-4 border-purple-500 "
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
