import { useEffect, useState } from 'react';
import Card from './Card';
import { MovieCategory, MovieTypes } from '../../types/movies.schema';
import Navigation from './Navigation';
import { motion } from 'framer-motion';
import Selected from './Selected';

const Home = () => {
  const [cardWidth, setCardWidht] = useState(450);
  const cardInRow = 5;
  const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardInRow);
  const [movies, setMovies] = useState<MovieTypes[]>([]);
  const [counter, setCounter] = useState(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [selectMovieType, setSelectMovieType] = useState('NowPlaying');

  const apiKey = import.meta.env.VITE_API_KEY;
  const urlRapidApi = import.meta.env.VITE_URL_RAPID;
  const urlHost = import.meta.env.VITE_RAPID_URL_HOST;

  useEffect(() => {
    const getMovies = async () => {
      const url = `${urlRapidApi}/Movie/${selectMovieType}?Page=${counter}&Language=en-US&Adult=true`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': urlHost,
        },
      };

      try {
        setIsLoading(true);
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setMovies(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, [counter, selectMovieType]);
  return (
    <div
      className='flex items-center justify-center'
      style={{ width: wrapperWidth }}
    >
      {isLoading ? (
        <h1 className='text-white text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          Loading...
        </h1>
      ) : (
        <div className='flex flex-wrap relative'>
          <Selected
            selectMovieType={selectMovieType}
            setSelectMovieType={setSelectMovieType}
          />
          {movies.map((movie, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoading ? 0 : 1 }}
              transition={{ duration: 0.2 * index }}
              key={movie.id}
            >
              <Card cardWidth={cardWidth} movie={movie} />
            </motion.div>
          ))}
          <Navigation counter={counter} setCounter={setCounter} />
        </div>
      )}
    </div>
  );
};

export default Home;
