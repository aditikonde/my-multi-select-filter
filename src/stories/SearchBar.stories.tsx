import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from '../components/searchBar/SearchBar';
import { type ComponentProps } from 'react';
import { fn } from 'storybook/test';

type StoryProps = ComponentProps<typeof SearchBar>;
const meta: Meta<StoryProps> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  args: {
    setQueryForItems: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;
export const SearchBarDefault: Story = {
  args: {
    queryForItems: '',
    ref: null,
  },
  render: (args) => {
    return <SearchBar {...args} />;
  },
};
