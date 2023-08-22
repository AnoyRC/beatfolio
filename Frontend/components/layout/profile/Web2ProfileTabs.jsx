'use client';

import UnderlineTabs from '@/components/ui/UnderlineTabs';
import TrackLists from './TrackLists';
import PlaylistLists from '../lists/PlaylistLists';

import { useDispatch, useSelector } from 'react-redux';

import { useEffect, useState } from 'react';
import useWeb2 from '@/hooks/useWeb2';

import useCrossmint from '@/hooks/useCrossmint';
import { fetchUserSongs } from '@/redux/crossmintSlice';

const Web2ProfileTabs = ({ id, name }) => {
  // const [userTracks, setUserTracks] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState(null);
  const [userFavTracksId, setUserFavTracksId] = useState(null);
  const [userFavTracks, setUserFavTracks] = useState(null);
  const { getPlaylistByAddress } = useWeb2();
  const dispatch = useDispatch();

  const userSong = useSelector((state) => state.crossmint.userSongs);

  useEffect(() => {
    dispatch(fetchUserSongs(id));

    getPlaylistByAddress(id).then((res) => {
      setUserPlaylists(res);
    });
  }, [id]);
  //
  const data = [
    {
      label: 'Songs',
      value: 'Songs',
      jsx: userSong && (
        <TrackLists name={name} tracks={userSong && userSong.data} />
      ),
    },
    {
      label: 'Playlists',
      value: 'Playlists',
      jsx: <PlaylistLists playlists={''} />,
    },
    {
      label: 'Favorites',
      value: 'Favorites',
      jsx: <TrackLists tracks={''} />,
    },
  ];

  return <UnderlineTabs data={data} value="Songs" margin="mb-24" />;
};
export default Web2ProfileTabs;
