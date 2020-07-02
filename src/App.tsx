import React from 'react';
import './App.css';
import InnerBlock from './components/InnerBlock';
import { mockColumns } from './testing/mocks/inner-block.mock';
import InnerHtml from './components/InnerHtml';
import { mockParagraph } from './testing/mocks/inner-html.mock';

function App() {
  return (
    <>
      <InnerHtml block={mockParagraph} />
      <InnerBlock block={mockColumns} />
    </>
  );
}

export default App;
