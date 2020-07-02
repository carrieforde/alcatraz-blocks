import React from 'react';
import InnerHtml from './index';
import {
  mockParagraph,
  mockHeadings,
  mockPreformatted,
  mockLists,
  mockVerse,
  mockSeparators,
  mockTable,
  mockBlockQuotes,
  mockAudio,
  mockButtons,
  mockPullQuotes,
  mockImages,
} from '../../mocks/inner-html.mock';

export default {
  title: 'InnerHtml',
};

export const paragraph = () => <InnerHtml block={mockParagraph} />;

export const headings = () =>
  mockHeadings.map((heading) => <InnerHtml block={heading} />);

export const preformatted = () => <InnerHtml block={mockPreformatted} />;

export const lists = () => mockLists.map((list) => <InnerHtml block={list} />);

export const verse = () => <InnerHtml block={mockVerse} />;

export const separators = () =>
  mockSeparators.map((separator) => <InnerHtml block={separator} />);

export const table = () => <InnerHtml block={mockTable} />;

export const blockquotes = () =>
  mockBlockQuotes.map((blockquote) => <InnerHtml block={blockquote} />);

export const audio = () => <InnerHtml block={mockAudio} />;

export const buttons = () =>
  mockButtons.map((button) => <InnerHtml block={button} />);

export const pullquotes = () =>
  mockPullQuotes.map((pullquote) => <InnerHtml block={pullquote} />);

export const images = () =>
  mockImages.map((image) => <InnerHtml block={image} />);
