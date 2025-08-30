import { loadItems } from './service.js';

export const resolvers = {
  Query: {
    items: () => loadItems(),
  },
};
