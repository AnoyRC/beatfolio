import SingerItem from './SingerItem';
import Link from 'next/link';

const Singers = ({ url, singers }) => {
  return (
    <section className="mb-24">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-medium uppercase mb-4 text-gray-700">
          Top Singers
        </h2>

        <Link
          className="underline text-gray-500 cursor-pointer hover:scale-105"
          href={url}
        >
          View All
        </Link>
      </div>

      <div>
        {singers.map((singer, index) => (
          <SingerItem
            key={singer.id ? singer.id : index}
            id={singer.id}
            singerName={singer.name}
            subscribers={singer.follower_count}
            singerImage={singer.profile_picture['150x150']}
          />
        ))}
      </div>
    </section>
  );
};

export default Singers;
