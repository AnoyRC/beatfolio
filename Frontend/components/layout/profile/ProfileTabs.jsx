'use client';

import UnderlineTabs from '@/components/ui/UnderlineTabs';
import TrackLists from '../lists/TrackLists';
import PlaylistLists from '../lists/PlaylistLists';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useAudius from '@/hooks/useAudius';

const ProfileTabs = () => {
  const { id } = useParams();
  const [userTracks, setUserTracks] = useState(null);
  const [userFavTracksId, setUserFavTracksId] = useState(null);
  const [userFavTracks, setUserFavTracks] = useState(null);

  const { getUserTracks, getUserFavTracks, getTrack } = useAudius();

  useEffect(() => {
    getUserTracks(id).then((res) => {
      setUserTracks(res.data);
    });

    getUserFavTracks(id).then((res) => {
      setUserFavTracksId(res.data);
      console.log(res.data);
    });
  }, [id]);

  useEffect(() => {
    if (userFavTracksId) {
      const tracks = userFavTracksId.map((track) => {
        return getTrack(track.favorite_item_id).then((res) => {
          return res.data;
        });
      });

      Promise.all(tracks).then((res) => {
        setUserFavTracks(res);
      });
    }
  }, [userFavTracksId]);

  const data = [
    {
      label: 'Songs',
      value: 'Songs',
      jsx: <TrackLists tracks={userTracks} />,
    },
    {
      label: 'Playlists',
      value: 'Playlists',
      jsx: <PlaylistLists playlists={''} />,
    },
    {
      label: 'Favorites',
      value: 'Favorites',
      jsx: <TrackLists tracks={userFavTracks} />,
    },
  ];

  return <UnderlineTabs data={data} value="Songs" margin="mb-24" />;
};
export default ProfileTabs;
