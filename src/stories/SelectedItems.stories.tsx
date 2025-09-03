import type { Meta, StoryObj } from '@storybook/react';
import SelectedItems from '../components/selectedItems/SelectedItems';
import { type ComponentProps } from 'react';
import { fn } from 'storybook/test';

type StoryProps = ComponentProps<typeof SelectedItems>;
const meta: Meta<StoryProps> = {
  title: 'Components/SelectedItems',
  component: SelectedItems,
  args: {
    handleAddRemoveItem: fn(),
    handleClearAll: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;
export const SelectedItemsDefault: Story = {
  args: {
    selectedItems: ['Item1', 'Item2', 'Item3'],
  },
  render: (args) => {
    return <SelectedItems {...args} />;
  },
};
