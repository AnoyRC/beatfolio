'use client';

import Feed from '@/components/layout/feeds/Feed';
import PlaylistContainer from '@/components/layout/lists/PlaylistContainer';
import UnderlineTabs from '@/components/ui/UnderlineTabs';
import PlaylistLists from '@/components/layout/lists/PlaylistLists';
import TrackLists from '@/components/layout/lists/TrackLists';

import { useState, useLayoutEffect, useEffect } from 'react';
import useAudius from '@/hooks/useAudius';

export default function Page() {
  const [undergroundTracks, setUndergroundTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const { getUndergroundTracks, getTrendingPlaylist } = useAudius();

  useLayoutEffect(() => {
    getUndergroundTracks().then((res) => {
      setUndergroundTracks(res.data);
    });

    getTrendingPlaylist().then((res) => {
      setPlaylists(res.data);
    });
  }, []);

  const data = [
    {
      label: 'Playlists',
      value: 'playlists',
      jsx: <PlaylistLists playlists={playlists.slice(7, 11)} />,
    },
    {
      label: 'Tracks',
      value: 'tracks',
      jsx: <TrackLists tracks={undergroundTracks} />,
    },
  ];

  const singer = {
    album_count: 0,
    artist_pick_track_id: null,
    bio: 'Ric Waves is a  music producer that mixes between electronic music in a whole bunch of genres and urban music, creating a unique way to make his sound.',
    cover_photo: {
      '640x':
        'https://audius-creator-6.theblueprint.xyz/content/Qmb4kfkSU5B8JFSrreZaP4ydqenf2RBh2GUAReMkWykkGh/640x.jpg',
      '2000x':
        'https://blockdaemon-audius-content-02.bdnodes.net/content/Qmb4kfkSU5B8JFSrreZaP4ydqenf2RBh2GUAReMkWykkGh/2000x.jpg',
    },
    followee_count: 15,
    follower_count: 1955,
    handle: 'Ricwaves',
    id: 'D2ZVd',
    name: 'Ric Waves',
    profile_picture: {
      '150x150':
        'https://cn1.mainnet.audiusindex.org/content/QmRbMMxh5P6cSU87tehFDCkqWupLMHcm4mcRqXfK7Mr3AH/150x150.jpg',
      '480x480':
        'https://audius-content-10.cultur3stake.com/content/QmRbMMxh5P6cSU87tehFDCkqWupLMHcm4mcRqXfK7Mr3AH/480x480.jpg',
    },
    erc_wallet: '0x21341e2d629cc424586f0d5ed26c39a3a63bffea',
    spl_wallet: 'GrEupYriEst5ReSvjrXcMdu3TBKYi3TtNenXghjtEtSr',
  };

  return (
    <section className="mx-2">
      <Feed
        key={'dp3dKaP'}
        id={'dp3dKaP'}
        songName={'Fly'}
        songMood={'Empowering'}
        songImage={
          'https://audius-content-3.figment.io/content/baeaaaiqsedf35nd65ugh3pklxnbbr7esmyv2galf6c3anxyjmbm53vwzwvu4s'
        }
        genre={'Electronic'}
        singer={singer}
        number={0}
      />

      <PlaylistContainer />
      {playlists && undergroundTracks && (
        <UnderlineTabs data={data} value="tracks" margin="mb-28" />
      )}
    </section>
  );
}
