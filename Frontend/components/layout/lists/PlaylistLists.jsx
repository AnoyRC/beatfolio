import PlaylistItem from './PlaylistItem';

const PlaylistLists = ({ playlists }) => {
  if (!playlists) {
    playlists = [
      {
        name: 'Playlist Name',
        images: '/song-photos/song-photo-1.png',
        release_date: '23, June 2022',
        tracks: '28',
      },
      {
        name: 'Playlist Name',
        images: '/song-photos/song-photo-2.png',
        release_date: '05, Dec 2022',
        tracks: '44',
      },
      {
        name: 'Playlist Name',
        images: '/song-photos/song-photo-3.png',
        release_date: '23, Jan 2022',
        tracks: '21',
      },
      {
        name: 'Playlist Name',
        images: '/song-photos/song-photo-4.png',
        release_date: '29, Aug 2022',
        tracks: '33',
      },
    ];
  }

  return (
    <div className="m-2">
      {playlists.map((playlist, index) => (
        <PlaylistItem
          key={index}
          playlistName={playlist.name}
          playlistImage={playlist.images}
          playlistDate={playlist.release_date}
          playlistTracks={playlist.tracks}
        />
      ))}
    </div>
  );
};

export default PlaylistLists;
