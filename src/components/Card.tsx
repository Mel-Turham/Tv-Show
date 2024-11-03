import { useState } from 'react';
import { MovieTypes } from '../../types/movies.schema';

import { motion } from 'framer-motion';

const Card = ({
  cardWidth,
  movie,
}: {
  cardWidth: number;
  movie: MovieTypes;
}) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div
      style={{ width: cardWidth }}
      className='h-[500px] relative flex justify-center items-center  shrink-0 p-2 group'
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showDescription ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => setShowDescription(!showDescription)}
        className='w-[95%] h-[95%] m-auto  text-white absolute rounded-lg backdrop-blur-2xl bg-black/50 flex flex-col justify-center gap-y-2 p-10 cursor-pointer'
      >
        <h1 className='text-4xl'>{movie.title}</h1>
        <div className='flex items-center gap-x-2 '>
          <span className='text-lg'>Genres:</span>
          <span className='font-semibold text-red-600 space-x-1'>
            {movie.genres.map((genre, index) => (
              <span key={index}>{genre}</span>
            ))}
          </span>
        </div>
        <span className='flex gap-x-2'>
          Original language:{' '}
          <span className='mr-2 uppercase'>{movie.originalLanguage}</span>
        </span>
        <span className='flex gap-x-2'>
          Release Date:{' '}
          <span className='mr-2 text-yellow-400'>{movie.releaseDate}</span>
        </span>
        <p className='flex flex-col gap-y-1 '>
          <span className='text-red-400'>Summary</span>
          <span className='first-letter:pl-2 '>{movie.overview}</span>
        </p>
      </motion.div>
      <img
        src={movie.image}
        alt={movie.title}
        className='absolute w-[95%] h-[95%]  object-cover rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 -z-10'
      />
    </div>
  );
};

export default Card;
