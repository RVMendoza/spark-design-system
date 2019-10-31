import React from 'react';

import SprkPagination from './SprkPagination';

export default {
  title: 'Components|Pagination',
  component: SprkPagination,
  parameters: { jest: ['SprkPagination'] },
};

export const defaultStory = () => (
  <SprkPagination
    currentPage={1}
    totalItems={3}
    itemsPerPage={1}
    onChangeCallback={() => {}}
  />
);

defaultStory.story = {
  name: 'Default',
};

export const long = () => (
  <SprkPagination
    currentPage={1}
    totalItems={100}
    itemsPerPage={5}
    onChangeCallback={() => {}}
  />
);

export const pager = () => (
  <SprkPagination
    variant="pager"
    currentPage={1}
    totalItems={5}
    itemsPerPage={1}
    onChangeCallback={() => {}}
  />
);
