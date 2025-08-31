import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ITEMS } from '../queries/queries';
import SearchBar from './searchBar/SearchBar';
import ItemList from './itemList/ItemList';

const MultiSelectFilterPanel: React.FunctionComponent = () => {
  const { data, loading, error } = useQuery(GET_ITEMS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <SearchBar />
      <ItemList items={data.items} />
    </div>
  );
};

export default MultiSelectFilterPanel;
