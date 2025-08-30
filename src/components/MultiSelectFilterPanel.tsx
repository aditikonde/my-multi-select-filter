import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ITEMS } from '../queries/queries';

const MultiSelectFilterPanel: React.FunctionComponent = () => {
  const { data, loading, error } = useQuery(GET_ITEMS);
  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Multi-Select Filter Panel</div>;
};

export default MultiSelectFilterPanel;
