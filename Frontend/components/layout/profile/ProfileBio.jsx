'use client';

import Image from 'next/image';
import { format } from 'date-fns';
import { useMemo } from 'react';

const ProfileAbout = ({
  userEmail,
  userCreatedAt,
  userLocation,
  userName,
  userBio,
  userFollowers,
  userFollowing,
}) => {
  const createdAt = useMemo(() => {
    if (userCreatedAt) {
      return format(new Date(userCreatedAt), 'MMMM yyyy');
    }
  }, [userCreatedAt]);

  return (
    <section className="px-4 mb-10">
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

      <div className="mt-8">
        <div className="flex flex-col">
          <p className="text-2xl font-semibold text-rainbow w-fit">
            {userName ? 'userName' : 'User Name'}
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-4">
        {userBio && <p className="mb-4">{userBio}</p>}

        <div className="flex gap-6">
          <div className="flex flex-row items-center gap-2 text-neutral-500">
            <div className="flex items-center space-x-3 text-gray-400">
              <Image
                src="/profile/location.svg"
                width={28}
                height={28}
                alt="Calendar"
                className="h-5 w-5 transition-transform duration-150 ease-out hover:scale-150"
              />
            </div>

            <p className="text-gray-500">
              {userLocation ? userLocation : 'Abc, Def'}
            </p>
          </div>

          <div className="flex flex-row items-center gap-2 text-neutral-500">
            <div className="flex items-center space-x-3 text-gray-400">
              <Image
                src="/profile/calendar.svg"
                width={28}
                height={28}
                alt="Calendar"
                className="h-5 w-5 transition-transform duration-150 ease-out hover:scale-150"
              />
            </div>

            <p className="text-gray-500">Joined {createdAt}</p>
          </div>
        </div>
      </div>

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
