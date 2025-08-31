import React from 'react';

interface ItemListProps {
  items: string[];
}

const ItemList: React.FunctionComponent<ItemListProps> = ({ items }) => {
  return (
    <div className='mt-3'>
      <div className='text-xs uppercase tracking-wide text-gray-500 mb-2'>
        List of Items
      </div>
      <ul
        id='items-list'
        className='p-2 sm:pr-6 sm:pl-6 rounded-lg border shadow-lg border-zinc-200 divide-y overflow-auto max-h-96'
      >
        {items.map((value: string) => {
          return (
            <li key={value} className='p-0'>
              <button
                type='button'
                className={
                  'w-full text-left px-4 py-2.5 hover:bg-gray-50 focus:bg-gray-50 outline-none '
                }
                onClick={() => console.log(value)}
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
