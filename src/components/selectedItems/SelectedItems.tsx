import React from 'react';

interface ISelectedItemsProps {
  selectedItems: string[];
  handleAddRemoveItem: (value: string) => void;
  handleClearAll: () => void;
}
const SelectedItems: React.FunctionComponent<ISelectedItemsProps> = ({
  selectedItems,
  handleAddRemoveItem,
  handleClearAll,
}) => {
  return (
    <div className='mt-6 mb-2'>
      <div className='text-xs uppercase tracking-wide text-gray-500 mb-2 mt-4'>
        Selected items
      </div>
      <ul className='flex flex-wrap gap-2'>
        {selectedItems.map((value: string) => (
          <li key={value}>
            <button
              type='button'
              onClick={() => handleAddRemoveItem(value)}
              className='inline-flex items-center gap-1 rounded-full border border-blue-200 bg-sky-100 px-3 py-1.5 text-sm hover:bg-sky-200'
              aria-pressed='true'
            >
              <span className='truncate max-w-[14rem]'>{value}</span>
              <span aria-hidden>×</span>
            </button>
          </li>
        ))}
      </ul>
      <div className='mt-4'>
        <button
          type='button'
          onClick={handleClearAll}
          className='uppercase text-rose-600 text-sm px-2 py-1 rounded-lg border border-red-300 bg-red-50 hover:bg-red-200'
          aria-label='Clear all selected'
        >
          Clear all
        </button>
      </div>
    </div>
  );
};

export default SelectedItems;
