import React from 'react';

interface IItemListProps {
  items: string[];
  ref: React.Ref<HTMLUListElement>;
  handleAddItem: (value: string) => void;
  selectedItems: string[];
}

const ItemList: React.FunctionComponent<IItemListProps> = ({
  items,
  ref,
  handleAddItem,
  selectedItems,
}) => {
  return (
    <div className='mt-5'>
      <div className='text-xs uppercase tracking-wide text-gray-500 mb-2 mt-4'>
        List of Items
      </div>
      <ul
        id='items-list'
        ref={ref}
        className='p-2 sm:pr-6 sm:pl-6 rounded-lg border shadow-lg border-zinc-200 divide-y overflow-auto max-h-96'
        role='listbox'
        aria-label='search results'
      >
        {items.length === 0 && (
          <li className='p-3 text-sm text-red-500'>No result found</li>
        )}
        {items.map((value: string) => {
          const isSelected = selectedItems.includes(value);
          return (
            <li key={value} className='p-0'>
              <button
                type='button'
                className={
                  'w-full text-left px-4 py-2.5 hover:bg-gray-50 focus:bg-gray-50 outline-none '
                }
                onClick={() => handleAddItem(value)}
                role='option'
                aria-selected={isSelected}
              >
                {value}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
