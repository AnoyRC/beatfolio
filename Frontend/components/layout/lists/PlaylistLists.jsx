import PlaylistItem from './PlaylistItem';

const PlaylistLists = ({ playlists }) => {
  return (
    <div className="m-2">
      {playlists.map((playlist) => (
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
