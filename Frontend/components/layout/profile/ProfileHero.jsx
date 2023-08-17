import Image from 'next/image';

const ProfileHero = ({ coverImage, userId, profileImage }) => {
  return (
    <section>
      <div className="bg-gray-300 h-44 relative">
        {coverImage && (
          <Image src={coverImage} fill alt="Cover Image" objectFit="cover" />
        )}

        <div className="absolute -bottom-16 left-4">
          <Image
            src={profileImage ? profileImage : '/placeholder.png'}
            width={150}
            height={150}
            alt="Profile Image"
            className="rounded-full border-4 border-purple-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
