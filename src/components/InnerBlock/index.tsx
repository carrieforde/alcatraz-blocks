import React, { ReactElement } from 'react';
import blocks from '../Component';
import { Block } from '../../interfaces/block.interface';

function InnerBlock({ block }: Block): ReactElement {
  let classes = block.blockName.replace('core/', 'wp-block-');
  let style = undefined;

  if (block.attrs.className) {
    classes += ` ${block.attrs.className}`;
  }

  if (block.blockName === 'core/column' && block.attrs.width) {
    style = { flexBasis: `${block.attrs.width}%` };
  }

  if (block.blockName === 'core/cover') {
    if (block.attrs.url) {
      style = { backgroundImage: `url(${block.attrs.url})` };
    }

    return (
      <div className={classes} style={style}>
        <div className="wp-block-cover__inner-container">
          {block.innerBlocks.map((b, index) => blocks({ ...b, index }))}
        </div>
      </div>
    );
  }

  return (
    <div className={classes} style={style}>
      {block.innerBlocks.map((b, index) => blocks({ ...b, index }))}
    </div>
  );
}

export default InnerBlock;
