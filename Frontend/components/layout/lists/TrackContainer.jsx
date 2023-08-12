import TrackLists from './TrackLists';

const TrackContainer = () => {
  return (
    <section className="my-10">
      <h3 className="text-2xl font-medium mb-4 text-gray-700">
        Trending Playlists
      </h3>

      <TrackLists />
    </section>
  );
};
export default TrackContainer;
