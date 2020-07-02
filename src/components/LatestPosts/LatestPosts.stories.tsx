import React from 'react';
import LatestPosts from './index';
import {
  mockLatestPost,
  mockLatestPostGrid,
  mockLatestPostGridExcerpt,
  mockLatestPostGridContent,
} from '../../mocks/latest-posts.mock';

export default {
  title: 'LatestPosts',
};

export const list = () => <LatestPosts block={mockLatestPost} />;

export const grid = () => <LatestPosts block={mockLatestPostGrid} />;

export const gridWithExcerpt = () => (
  <LatestPosts block={mockLatestPostGridExcerpt} />
);

export const gridWithContent = () => (
  <LatestPosts block={mockLatestPostGridContent} />
);
