const SongDetails = ({ songName, singerName, genre }) => {
  return (
    <div className="flex items-center py-1">
      <div>
        <h3 className="text-2xl font-normal">
          {songName ? songName : 'Song Name'}
        </h3>

        <div>
          <h4 className="text-xl mt-1 text-gray-500">
            {singerName ? singerName : 'Singer Name'}
          </h4>

          <p className="text-gray-500 mt-3 flex items-center">
            <span className="w-1 h-1 mr-2 bg-gray-500 rounded-full"></span>
            {genre ? genre : 'Genre'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
