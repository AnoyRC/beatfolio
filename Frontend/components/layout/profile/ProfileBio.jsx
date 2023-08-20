'use client';

import Image from 'next/image';

const ProfileAbout = ({ userName, userBio, userFollowers, userFollowing }) => {
  return (
    <section className="px-4 mb-10 w-full">
      <div className="flex gap-5 justify-end p-2 w-fit ml-auto md:w-full">
        {/* {currentUserData?.user?.email === userEmail ? (
          <div></div>
        ) : ( */}
        <button className="px-6 py-3 border-2 border-white hover:opacity-90 hover:scale-105 active:scale-95 font-semibold rounded-lg">
          Donate
        </button>
        <button className="px-6 py-3 bg-white border-2 border-white hover:opacity-90 hover:scale-105 active:scale-95 text-black font-semibold rounded-lg">
          Follow
        </button>
        {/* )} */}
      </div>

      <div className="my-4">
        <div className="flex flex-col">
          <p className="text-2xl font-semibold text-rainbow w-fit">
            {userName ? userName : 'User Name'}
          </p>
        </div>
      </div>

      {userBio && <pre className="mb-4 w-full">{userBio}</pre>}

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
