export const mockLatestPost = {
    blockName: "core/latest-posts",
    attrs: [],
    innerBlocks: [],
    innerHTML: "",
    innerContent: []
}

export const mockLatestPostGrid = {
    blockName: "core/latest-posts",
    attrs: {
        postLayout: "grid",
        columns: 2
    },
    innerBlocks: [],
    innerHTML: "",
    innerContent: []
}

export const mockLatestPostGridExcerpt = {
    blockName: "core/latest-posts",
    attrs: {
        displayPostContent: true,
        postLayout: "grid",
        columns: 2,
        order: "asc",
        orderBy: "title"
    },
    innerBlocks: [],
    innerHTML: "",
    innerContent: []
}

export const mockLatestPostGridContent = {
    blockName: "core/latest-posts",
    attrs: {
        displayPostContent: true,
        displayPostContentRadio: "full_post",
        displayPostDate: true,
        postLayout: "grid",
        columns: 2
    },
    innerBlocks: [],
    innerHTML: "",
    innerContent: []
}
