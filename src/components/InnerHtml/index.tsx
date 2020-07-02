import ReactHtmlParser from 'react-html-parser';
import { Block } from '../../interfaces/block.interface';

function InnerHtml({ block }: Block): any {
  return ReactHtmlParser(block.innerHTML);
}

export default InnerHtml;
