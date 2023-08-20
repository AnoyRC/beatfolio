import PlaylistItem from './PlaylistItem';

const PlaylistLists = ({ playlists }) => {
  if (!playlists || playlists.length === 0)
    return (
      <div className="mt-10 text-gray-500 w-full text-center">
        No Playlists Found
      </div>
    );

  return (
    <div className="m-2">
      {playlists &&
        playlists.map((playlist) => (
          <PlaylistItem
            key={playlist.id}
            id={playlist.id}
            playlistName={playlist.playlist_name}
            playlistImage={playlist.artwork}
            playlistDate={playlist.release_date}
            playlistTracks={playlist.tracks}
          />
        ))}
    </div>
  );
};

export default PlaylistLists;
