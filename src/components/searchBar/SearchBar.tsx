import React from 'react';
import img from '../../assets/search.svg';

const SearchBar: React.FunctionComponent = () => {
  return (
    <div className='relative'>
      <input
        name='search'
        type='text'
        placeholder='Search...'
        className='w-full border p-2 rounded outline-none focus:ring-2 focus:ring-zinc-500'
      />
      <img
        src={img}
        alt='search'
        className='absolute right-6 top-3 w-5 h-5 pointer-events-none opacity-40'
      />
    </div>
  );
};

export default SearchBar;
