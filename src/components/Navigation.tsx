interface NavigationProps {
  counter: number;
  setCounter: (counter: number) => void;
}

const Navigation = ({ counter, setCounter }: NavigationProps) => {
  return (
    <div className='flex items-center justify-between gap-1 fixed bottom-5 left-0 bg-gray-100 w-[100px] px-2 py-1 rounded-full'>
      <button
        onClick={() => setCounter(counter > 1 ? counter - 1 : counter)}
        className='h-[20px] w-[20px] rounded-full bg-red-300 flex items-center justify-center'
      >
        &minus;
      </button>
      <span>{counter}</span>
      <button
        onClick={() => setCounter(counter + 1)}
        className='h-[20px] w-[20px] rounded-full bg-red-300 flex items-center justify-center'
      >
        {' '}
        &#43;
      </button>
    </div>
  );
};

export default Navigation;
