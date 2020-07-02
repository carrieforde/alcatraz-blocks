import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import InnerHtml from './index';
import { mockParagraph } from '../../mocks/inner-html.mock';

let container: HTMLDivElement;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

describe('Paragraph', () => {
  act(() => {
    render(<InnerHtml block={mockParagraph} />, container);
  });

  const p = container.querySelector('p');

  it('should render', () => {
    expect(p).toBeTruthy();
    expect(p?.textContent).toEqual(
      'Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.'
    );
  });
});
