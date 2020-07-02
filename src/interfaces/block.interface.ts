export interface BlockData {
    blockName: string;
    attrs: any;
    innerBlocks: any[];
    innerHTML: string;
    innerContent: string[];
    index?: number;
}

export interface Block {
    block: BlockData;
}
