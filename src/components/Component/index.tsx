import React from 'react';
import { BlockData } from '../../interfaces/block.interface';
import InnerHtml from '../InnerHtml';
import InnerBlock from '../InnerBlock';

const Components: { [key: string]: any } = {
  'core/paragraph': InnerHtml,
  'core/heading': InnerHtml,
  'core/preformatted': InnerHtml,
  'core/list': InnerHtml,
  'core/verse': InnerHtml,
  'core/separator': InnerHtml,
  'core/table': InnerHtml,
  'core/quote': InnerHtml,
  'core/audio': InnerHtml,
  'core/button': InnerHtml,
  'core/pullquote': InnerHtml,
  'core/image': InnerHtml,
  'core/cover': InnerBlock,
  'core/columns': InnerBlock,
  'core/column': InnerBlock,
};

export default (block: BlockData) => {
  console.log(Components);
  if (typeof Components[block.blockName] !== 'undefined') {
    return React.createElement(Components[block.blockName], {
      block,
      key: block.index,
    });
  }
};
