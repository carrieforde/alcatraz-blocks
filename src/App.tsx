import React from 'react';
import './App.css';
import InnerBlock from './components/InnerBlock';
import { mockColumns } from './mocks/inner-block.mock';
import InnerHtml from './components/InnerHtml';
import { mockParagraph } from './mocks/inner-html.mock';

function App() {
  return (
    <>
      <InnerHtml block={mockParagraph} />
      <InnerBlock block={mockColumns} />
    </>
  );
}

export default App;
