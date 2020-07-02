import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Block } from '../../interfaces/block.interface';

function InnerHtml({ block }: Block) {
  return ReactHtmlParser(block.innerHTML);
}

export default InnerHtml;
