'use client';

const ProfileAbout = ({ userName, userBio, userFollowers, userFollowing }) => {
  return (
    <section className="px-4 mb-10 w-full">
      <div className="mt-24">
        <div className="flex flex-col">
          <p className="text-2xl font-semibold text-rainbow w-fit">
            {userName ? userName : 'User Name'}
          </p>
        </div>
      </div>

      {userBio && <pre className="my-4 w-full">{userBio}</pre>}

      <div className="flex items-center mt-4 gap-6">
        <div className="flex items-center gap-1">
          <p className="font-semibold">{userFollowing || 0}</p>
          <p className="text-gray-500">Following</p>
        </div>

        <div className="flex items-center gap-1">
          <p className="font-semibold">{userFollowers || 0}</p>
          <p className="text-gray-500">Followers</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileAbout;
