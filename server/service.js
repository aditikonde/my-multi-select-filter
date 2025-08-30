import itemsList from '../src/assets/items.json' with { type: 'json' };

export const loadItems = () => {
  let items = [];
  try {
    items = Array.isArray(itemsList.data) ? itemsList.data : [];
  } catch (err) {
    console.error('Error loading items.json:', err);
  }
  return items;
};
