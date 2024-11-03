import { useEffect, useState } from 'react';
import Card from './Card';
import { MovieTypes } from '../../types/movies.schema';

const Home = () => {
  const [cardWidth, setCardWidht] = useState(450);
  const cardInRow = 5;
  const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardInRow);
  const [movies, setMovies] = useState<MovieTypes[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const url =
        'https://tvshow.p.rapidapi.com/Movie/NowPlaying?Page=1&Language=en-US&Adult=true';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            '78a7eb82e1mshdb5202946069b4ep116c2ajsn43cfdeb8bad1',
          'x-rapidapi-host': 'tvshow.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setMovies(result);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, []);
  return (
    <div
      className='flex items-center justify-center'
      style={{ width: wrapperWidth }}
    >
      <div className='flex flex-wrap'>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Card cardWidth={cardWidth} movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
