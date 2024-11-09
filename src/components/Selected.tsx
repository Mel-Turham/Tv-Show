interface SelectedProps {
  selectMovieType: string;
  setSelectMovieType: (selectMovieType: string) => void;
}

const Selected = ({ selectMovieType, setSelectMovieType }: SelectedProps) => {
  return (
    <div className='fixed top-5 z-10 left-5   w-[100px] px-2 py-1'>
      <select
        onChange={(e) => setSelectMovieType(e.target.value)}
        value={selectMovieType}
        className='bg-gray-100 outline-none cursor-pointer p-2 rounded-sm'
      >
        <option value='NowPlaying'>Not Playing</option>
        <option value='TopRated'>Top Rated</option>
        <option value='Popular'>Popular</option>
        <option value='UpComing'>Up Coming </option>
      </select>
    </div>
  );
};

export default Selected;
