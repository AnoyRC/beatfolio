const MusicProgressBar = ({ maxWidth, endTime }) => {
  return (
    <div className="flex items-center w-full mx-10">
      <p className="text-gray-700">0:00</p>

      <div
        className={`h-[5px] w-full rounded-full overflow-hidden relative mx-3 ${
          maxWidth ? maxWidth : ''
        }`}
      >
        <div className={`bg-gray-700 w-full h-full`}></div>
        <div
          style={{ width: '100px' }}
          className="h-full bg-white z-10 rounded-full absolute top-0 left-0"
        ></div>
      </div>

      <p className="text-gray-700">{endTime ? endTime : '4:00'}</p>
    </div>
  );
};

export default MusicProgressBar;
