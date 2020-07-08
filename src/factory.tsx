import React from "react";
import InnerBlock from "./components/InnerBlock";
import InnerHtml from "./components/InnerHtml";
import { BlockData } from "./interfaces/block.interface";

const Components: { [key: string]: any } = {
  "core/paragraph": InnerHtml,
  "core/heading": InnerHtml,
  "core/preformatted": InnerHtml,
  "core/list": InnerHtml,
  "core/verse": InnerHtml,
  "core/separator": InnerHtml,
  "core/table": InnerHtml,
  "core/quote": InnerHtml,
  "core/audio": InnerHtml,
  "core/button": InnerHtml,
  "core/pullquote": InnerHtml,
  "core/image": InnerHtml,
  "core/cover": InnerBlock,
  "core/columns": InnerBlock,
  "core/column": InnerBlock,
};

function Factory(props: { block: BlockData; key: number }) {
  const Component = Components[props.block.blockName]
    ? Components[props.block.blockName]
    : null;
  console.log(Component);
  if (Component) {
    return <Component block={props.block} key={props.key} />;
  }

  return (
    <span role="img" aria-label="frowning face">
      ☹️
    </span>
  );
}

export default Factory;
