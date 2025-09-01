import React, { useMemo, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ITEMS } from '../queries/queries';
import SearchBar from './searchBar/SearchBar';
import ItemList from './itemList/ItemList';
import SelectedItems from './selectedItems/SelectedItems';

const MultiSelectFilterPanel: React.FunctionComponent = () => {
  const { data, loading, error } = useQuery(GET_ITEMS);
  const [queryForItems, setQueryForItems] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const fetchFilteredList = useMemo(() => {
    const queryLowerCase = queryForItems.trim().toLowerCase();

    return (data?.items ?? [])
      .filter((x: string) => !selectedItems.includes(x))
      .filter((x: string) =>
        queryLowerCase ? x.toLowerCase().includes(queryLowerCase) : true
      );
  }, [data?.items, queryForItems, selectedItems]);

  const handleAddRemoveSelectedItem = (value: string) => {
    setSelectedItems((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleClearAll = () => setSelectedItems([]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <SearchBar
        ref={inputRef}
        queryForItems={queryForItems}
        setQueryForItems={setQueryForItems}
      />
      {selectedItems.length > 0 && (
        <SelectedItems
          selectedItems={selectedItems}
          handleAddRemoveItem={handleAddRemoveSelectedItem}
          handleClearAll={handleClearAll}
        />
      )}
      <ItemList
        items={fetchFilteredList}
        ref={listRef}
        handleAddItem={handleAddRemoveSelectedItem}
        selectedItems={selectedItems}
      />
    </div>
  );
};

export default MultiSelectFilterPanel;
