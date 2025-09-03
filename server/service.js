import itemsList from '../src/assets/items.json' with { type: 'json' };

export const loadItems = () => {
  let items = [];
  try {
    items = Array.isArray(itemsList.data)
      ? itemsList.data.map((str) =>
          str.replace(/&amp;/g, '&').replace(/&#x27;/g, "'")
        )
      : [];
  } catch (err) {
    console.error('Error loading items.json:', err);
  }
  return items;
};
