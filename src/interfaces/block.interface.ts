export interface BlockData {
    blockName: string;
    attrs: any;
    innerBlocks: any[];
    innerHTML: string;
    innerContent: Array<string | null>;
    index?: number;
}

export interface Block {
    block: BlockData;
}
