import SingerItem from './SingerItem';

const Singers = ({ url, singers }) => {
  if (!singers) {
    singers = [
      {
        singerName: 'Singer Name',
        subscribers: '432k+ Subscribers',
        singerImage: '/song-photos/song-photo-1.png',
      },
      {
        singerName: 'Singer Name',
        subscribers: '432k+ Subscribers',
        singerImage: '/song-photos/song-photo-2.png',
      },
      {
        singerName: 'Singer Name',
        subscribers: '432k+ Subscribers',
        singerImage: '/song-photos/song-photo-3.png',
      },
    ];
  }

  return (
    <section className="mb-4">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-medium uppercase mb-4 text-gray-700">
          Top Singers
        </h2>

        <span className="underline text-gray-500 cursor-pointer hover:scale-105">
          View All
        </span>
      </div>

      <div>
        {singers.map((singer, index) => (
          <SingerItem
            key={singer.id ? singer.id : index}
            singerName={singer.singerName}
            subscribers={singer.subscribers}
            singerImage={singer.singerImage}
          />
        ))}
      </div>
    </section>
  );
};

export default Singers;
