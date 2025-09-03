import type { Meta, StoryObj } from '@storybook/react';
import ItemList from '../components/itemList/ItemList';
import { type ComponentProps } from 'react';
import { fn } from 'storybook/test';

type StoryProps = ComponentProps<typeof ItemList>;
const meta: Meta<StoryProps> = {
  title: 'Components/ItemList',
  component: ItemList,
  args: {
    handleAddItem: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;
export const ItemListDefault: Story = {
  args: {
    items: ['Item1', 'Item2', 'Item3'],
    ref: null,
    selectedItems: ['Item1'],
  },
  render: (args) => {
    return <ItemList {...args} />;
  },
};
