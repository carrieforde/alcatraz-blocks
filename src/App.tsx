import React from "react";
import "./App.css";
import InnerBlock from "./components/InnerBlock";
import InnerHtml from "./components/InnerHtml";
import { mockCover, mockColumns } from "./mocks/inner-block.mock";
import { mockParagraph } from "./mocks/inner-html.mock";
import "./tailwind.output.css";

function App() {
  return (
    <>
      <InnerHtml block={mockParagraph} />
      <InnerBlock block={mockCover} />
      <InnerBlock block={mockColumns} />
    </>
  );
}

export default App;
