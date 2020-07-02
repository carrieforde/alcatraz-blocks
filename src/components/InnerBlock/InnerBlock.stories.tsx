import React from 'react';
import InnerBlock from './index';
import { mockCover, mockColumns } from '../../testing/mocks/inner-block.mock';

export default {
  title: 'InnerBlock',
};

export const cover = () => <InnerBlock block={mockCover} />;

export const columns = () => <InnerBlock block={mockColumns} />;
