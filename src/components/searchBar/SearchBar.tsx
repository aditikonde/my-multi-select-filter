import React from 'react';
import img from '../../assets/search.svg';

interface ISearchBarProps {
  ref: React.Ref<HTMLInputElement>;
  queryForItems: string;
  setQueryForItems: (query: string) => void;
}
const SearchBar: React.FunctionComponent<ISearchBarProps> = ({
  ref,
  queryForItems,
  setQueryForItems,
}) => {
  return (
    <div className='relative'>
      <input
        name='search'
        type='text'
        ref={ref}
        value={queryForItems}
        onChange={(e) => setQueryForItems(e.target.value)}
        placeholder='Search...'
        className='w-full border p-2 rounded outline-none focus:ring-2 focus:ring-zinc-500'
        aria-autocomplete='list'
        aria-controls='search-listbox'
        aria-expanded='true'
        role='combobox'
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
