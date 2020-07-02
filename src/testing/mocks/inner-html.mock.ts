export const mockParagraph = {
    blockName: "core/paragraph",
    attrs: [],
    innerBlocks: [],
    innerHTML: " <p>Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.</p> ",
    innerContent: [
        " <p>Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.</p> "
    ]
}

export const mockHeading2 = {
    blockName: "core/heading",
    attrs: [],
    innerBlocks: [],
    innerHTML: " <h2>Heading Two</h2> ",
    innerContent: [
        " <h2>Heading Two</h2> "
    ]
};

export const mockHeading3 = {
    blockName: "core/heading",
    attrs: {
        level: 3
    },
    innerBlocks: [],
    innerHTML: " <h3>Heading Three</h3> ",
    innerContent: [
        " <h3>Heading Three</h3> "
    ]
};

export const mockHeading4 = {
    blockName: "core/heading",
    attrs: {
        level: 4
    },
    innerBlocks: [],
    innerHTML: " <h4>Heading Four</h4> ",
    innerContent: [
        " <h4>Heading Four</h4> "
    ]
};

export const mockHeading5 = {
    blockName: "core/heading",
    attrs: {
        level: 5
    },
    innerBlocks: [],
    innerHTML: " <h5>Heading Five</h5> ",
    innerContent: [
        " <h5>Heading Five</h5> "
    ]
};

export const mockHeading6 = {
    blockName: "core/heading",
    attrs: {
        level: 6
    },
    innerBlocks: [],
    innerHTML: " <h6>Heading Six</h6> ",
    innerContent: [
        " <h6>Heading Six</h6> "
    ]
};

export const mockHeadings = [
    mockHeading2,
    mockHeading3,
    mockHeading4,
    mockHeading5,
    mockHeading6
]

export const mockPreformatted = {
    blockName: "core/preformatted",
    attrs: [],
    innerBlocks: [],
    innerHTML: `<pre class="wp-block-preformatted"><strong>The Road Not Taken</strong>, <em>by Robert Frost</em><br><br>Two roads diverged in a yellow wood,<br>And sorry I could not travel both<br>And be one traveler, long I stood <br>And looked down one as far as I could<br>To where it bent in the undergrowth;<br>Then took the other, as just as fair,<br>And having perhaps the better claim,<br>Because it was grassy and wanted wear;<br>Though as for that the passing there<br>Had worn them really about the same,<br>And both that morning equally lay<br>In leaves no step had trodden black.<br>Oh, I kept the first for another day!<br>Yet knowing how way leads on to way,<br>I doubted if I should ever come back.<br>I shall be telling this with a sigh<br>Somewhere ages and ages hence:<br>Two roads diverged in a wood, and I—<br>I took the one less traveled by,<br>And that has made all the difference.<br><br>...and heres a line of some really, really, really, really long text, just to see how it is handled and to find out how it overflows;</pre>`,
    innerContent: [
        `<pre class="wp-block-preformatted"><strong>The Road Not Taken</strong>, <em>by Robert Frost</em><br><br>Two roads diverged in a yellow wood,<br>And sorry I could not travel both<br>And be one traveler, long I stood <br>And looked down one as far as I could<br>To where it bent in the undergrowth;<br>Then took the other, as just as fair,<br>And having perhaps the better claim,<br>Because it was grassy and wanted wear;<br>Though as for that the passing there<br>Had worn them really about the same,<br>And both that morning equally lay<br>In leaves no step had trodden black.<br>Oh, I kept the first for another day!<br>Yet knowing how way leads on to way,<br>I doubted if I should ever come back.<br>I shall be telling this with a sigh<br>Somewhere ages and ages hence:<br>Two roads diverged in a wood, and I—<br>I took the one less traveled by,<br>And that has made all the difference.<br><br>...and heres a line of some really, really, really, really long text, just to see how it is handled and to find out how it overflows;</pre>`
    ]
};

export const mockOrderedList = {
    blockName: "core/list",
    attrs: {
        ordered: true
    },
    innerBlocks: [],
    innerHTML: " <ol><li>Nullam id dolor id nibh ultricies vehicula ut id elit.</li><li>Donec ullamcorper nulla non metus auctor fringilla. <ol> <li>Condimentum euismod aenean.</li> <li>Purus commodo ridiculus.</li> <li>Nibh commodo vestibulum.</li> </ol> </li><li>Cras justo odio, dapibus ac facilisis in.</li></ol> ",
    innerContent: [
        " <ol><li>Nullam id dolor id nibh ultricies vehicula ut id elit.</li><li>Donec ullamcorper nulla non metus auctor fringilla. <ol> <li>Condimentum euismod aenean.</li> <li>Purus commodo ridiculus.</li> <li>Nibh commodo vestibulum.</li> </ol> </li><li>Cras justo odio, dapibus ac facilisis in.</li></ol> "
    ]
};

export const mockUnorderedList = {
    blockName: "core/list",
    attrs: [],
    innerBlocks: [],
    innerHTML: " <ul><li>Nullam id dolor id nibh ultricies vehicula ut id elit.</li><li>Donec ullamcorper nulla non metus auctor fringilla. <ul> <li>Nibh commodo vestibulum.</li> <li>Aenean eu leo quam.</li> <li>Pellentesque ornare sem lacinia.</li> </ul> </li><li>Cras justo odio, dapibus ac facilisis in.</li></ul> ",
    innerContent: [
        " <ul><li>Nullam id dolor id nibh ultricies vehicula ut id elit.</li><li>Donec ullamcorper nulla non metus auctor fringilla. <ul> <li>Nibh commodo vestibulum.</li> <li>Aenean eu leo quam.</li> <li>Pellentesque ornare sem lacinia.</li> </ul> </li><li>Cras justo odio, dapibus ac facilisis in.</li></ul> "
    ]
}

export const mockLists = [
    mockOrderedList,
    mockUnorderedList
]

export const mockVerse = {
    blockName: "core/verse",
    attrs: [],
    innerBlocks: [],
    innerHTML: `<pre class="wp-block-verse">A block for haiku? <br>Why not? <br>Blocks for all the things!</pre>`,
    innerContent: [
        `<pre class="wp-block-verse">A block for haiku? <br>Why not? <br>Blocks for all the things!</pre>`
    ]
}

export const mockSeparator = {
    blockName: "core/separator",
    attrs: [],
    innerBlocks: [],
    innerHTML: `<hr class="wp-block-separator"/>`,
    innerContent: [
        `<hr class="wp-block-separator"/>`
    ]
}

export const mockSeparatorWide = {
    blockName: "core/separator",
    attrs: {
        className: "is-style-wide"
    },
    innerBlocks: [],
    innerHTML: `<hr class="wp-block-separator is-style-wide"/>`,
    innerContent: [
        `<hr class="wp-block-separator is-style-wide"/>`
    ]
}

export const mockSeparatorDots = {
    blockName: "core/separator",
    attrs: {
        className: "is-style-dots"
    },
    innerBlocks: [],
    innerHTML: `<hr class="wp-block-separator is-style-dots"/>`,
    innerContent: [
        `<hr class="wp-block-separator is-style-dots"/>`
    ]
}

export const mockSeparators = [
    mockSeparator,
    mockSeparatorWide,
    mockSeparatorDots
]

export const mockTable = {
    blockName: "core/table",
    attrs: [],
    innerBlocks: [],
    innerHTML: `<figure class="wp-block-table"><table class=""><tbody><tr><td>Employee</td><td>Salary</td><td>Position</td></tr><tr><td>Jane Doe<br></td><td>$100k</td><td>CEO</td></tr><tr><td>John Doe</td><td>$100k</td><td>CTO</td></tr><tr><td>Jane Bloggs</td><td>$100k</td><td>Engineering</td></tr><tr><td>Fred Bloggs</td><td>$100k</td><td>Marketing</td></tr></tbody></table></figure>`,
    innerContent: [
        `<figure class="wp-block-table"><table class=""><tbody><tr><td>Employee</td><td>Salary</td><td>Position</td></tr><tr><td>Jane Doe<br></td><td>$100k</td><td>CEO</td></tr><tr><td>John Doe</td><td>$100k</td><td>CTO</td></tr><tr><td>Jane Bloggs</td><td>$100k</td><td>Engineering</td></tr><tr><td>Fred Bloggs</td><td>$100k</td><td>Marketing</td></tr></tbody></table></figure>`
    ]
}

export const mockBlockQuote = {
    blockName: "core/quote",
    attrs: {
        align: "left"
    },
    innerBlocks: [],
    innerHTML: `<blockquote class="wp-block-quote has-text-align-left"><p>Donec sed odio dui. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio.</p><cite>Rich Tabor</cite></blockquote>`,
    innerContent: [
        `<blockquote class="wp-block-quote has-text-align-left"><p>Donec sed odio dui. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio.</p><cite>Rich Tabor</cite></blockquote>`
    ]
}

export const mockBlockQuoteAlt = {
    blockName: "core/quote",
    attrs: {
        align: "left",
        className: "is-large"
    },
    innerBlocks: [],
    innerHTML: `<blockquote class="wp-block-quote has-text-align-left is-large"><p>Donec sed odio dui. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p><cite>Rich Tabor</cite></blockquote>`,
    innerContent: [
        `<blockquote class="wp-block-quote has-text-align-left is-large"><p>Donec sed odio dui. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p><cite>Rich Tabor</cite></blockquote>`
    ]
}

export const mockBlockQuotes = [
    mockBlockQuote,
    mockBlockQuoteAlt
]

export const mockAudio = {
    blockName: "core/audio",
    attrs: {
        align: "center"
    },
    innerBlocks: [],
    innerHTML: `<figure class="wp-block-audio aligncenter"><audio controls src="https://example.com"></audio><figcaption>An example of an Audio Block caption</figcaption></figure>`,
    innerContent: [
        `<figure class="wp-block-audio aligncenter"><audio controls src="https://example.com"></audio><figcaption>An example of an Audio Block caption</figcaption></figure>`
    ]
}

export const mockButtonCenter = {
    blockName: "core/button",
    attrs: {
        align: "center"
    },
    innerBlocks: [],
    innerHTML: `<div class="wp-block-button aligncenter"><a class="wp-block-button__link" href="https://themebeans.com">Center Aligned Button</a></div>`,
    innerContent: [
        `<div class="wp-block-button aligncenter"><a class="wp-block-button__link" href="https://themebeans.com">Center Aligned Button</a></div>`
    ]
}

export const mockButtonLeft = {
    blockName: "core/button",
    attrs: {
        align: "left"
    },
    innerBlocks: [],
    innerHTML: `<div class="wp-block-button alignleft"><a class="wp-block-button__link" href="https://themebeans.com">Left Aligned Button</a></div>`,
    innerContent: [
        `<div class="wp-block-button alignleft"><a class="wp-block-button__link" href="https://themebeans.com">Left Aligned Button</a></div>`
    ]
};

export const mockButtonRight = {
    blockName: "core/button",
    attrs: {
        align: "right"
    },
    innerBlocks: [],
    innerHTML: `<div class="wp-block-button alignright"><a class="wp-block-button__link">Right Aligned Button</a></div>`,
    innerContent: [
        `<div class="wp-block-button alignright"><a class="wp-block-button__link">Right Aligned Button</a></div>`
    ]
}

export const mockButtons = [
    mockButtonCenter,
    mockButtonLeft,
    mockButtonRight
]

export const mockPullQuote = {
    blockName: "core/pullquote",
    attrs: {
        className: "aligncenter"
    },
    innerBlocks: [],
    innerHTML: `<figure class="wp-block-pullquote aligncenter"><blockquote><p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere est at lobortis.</p><cite>Rich Tabor, ThemeBeans.com</cite></blockquote></figure>`,
    innerContent: [
        `<figure class="wp-block-pullquote aligncenter"><blockquote><p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere est at lobortis.</p><cite>Rich Tabor, ThemeBeans.com</cite></blockquote></figure>`
    ]
}

export const mockPullQuoteWide = {
    blockName: "core/pullquote",
    attrs: {
        className: "alignwide"
    },
    innerBlocks: [],
    innerHTML: `<figure class="wp-block-pullquote alignwide"><blockquote><p>Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed ibendum nulla sed consectetur.&nbsp;</p><cite>Rich Tabor, Founder at ThemeBeans.com</cite></blockquote></figure>`,
    innerContent: [
        `<figure class="wp-block-pullquote alignwide"><blockquote><p>Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed ibendum nulla sed consectetur.&nbsp;</p><cite>Rich Tabor, Founder at ThemeBeans.com</cite></blockquote></figure>`
    ]
}

export const mockPullQuoteFull = {
    blockName: "core/pullquote",
    attrs: {
        className: "alignfull"
    },
    innerBlocks: [],
    innerHTML: `<figure class="wp-block-pullquote alignfull"><blockquote><p>Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.&nbsp;</p><cite>Rich Tabor, Founder at ThemeBeans.com</cite></blockquote></figure>`,
    innerContent: [
        `<figure class="wp-block-pullquote alignfull"><blockquote><p>Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.&nbsp;</p><cite>Rich Tabor, Founder at ThemeBeans.com</cite></blockquote></figure>`
    ]
}

export const mockPullQuoteLeft = {
    blockName: "core/pullquote",
    attrs: {
        className: "alignleft"
    },
    innerBlocks: [],
    innerHTML: `<figure class="wp-block-pullquote alignleft"><blockquote><p>Here we have a left-aligned pullquote.</p><cite>Rich Tabor</cite></blockquote></figure>`,
    innerContent: [
        `<figure class="wp-block-pullquote alignleft"><blockquote><p>Here we have a left-aligned pullquote.</p><cite>Rich Tabor</cite></blockquote></figure>`
    ]
}

export const mockPullQuoteRight = {
    blockName: "core/pullquote",
    attrs: {
        className: "alignright"
    },
    innerBlocks: [],
    innerHTML: `<figure class="wp-block-pullquote alignright"><blockquote><p>Here we have a right-aligned pullquote.</p><cite>Rich Tabor</cite></blockquote></figure>`,
    innerContent: [
        `<figure class="wp-block-pullquote alignright"><blockquote><p>Here we have a right-aligned pullquote.</p><cite>Rich Tabor</cite></blockquote></figure>`
    ]
}

export const mockPullQuotes = [
    mockPullQuote,
    mockPullQuoteWide,
    mockPullQuoteFull,
    mockPullQuoteLeft,
    mockPullQuoteRight
]

export const mockImageCenter = {
    blockName: "core/image",
    attrs: {
        align: "center",
        id: 2117
    },
    innerBlocks: [],
    innerHTML: `<div class="wp-block-image"><figure class="aligncenter"><img src="http://alcatraz.local/wp-content/plugins/block-unit-test/assets/images/placeholder.jpg" alt="" class="wp-image-2117"/></figure></div>`,
    innerContent: [
        `<div class="wp-block-image"><figure class="aligncenter"><img src="http://alcatraz.local/wp-content/plugins/block-unit-test/assets/images/placeholder.jpg" alt="" class="wp-image-2117"/></figure></div>`
    ]
}

export const mockImageWide = {
    blockName: "core/image",
    attrs: {
        align: "wide",
        id: 2117
    },
    innerBlocks: [],
    innerHTML: `<figure class="wp-block-image alignwide"><img src="http://alcatraz.local/wp-content/plugins/block-unit-test/assets/images/placeholder.jpg" alt="" class="wp-image-2117"/></figure>`,
    innerContent: [
        `<figure class="wp-block-image alignwide"><img src="http://alcatraz.local/wp-content/plugins/block-unit-test/assets/images/placeholder.jpg" alt="" class="wp-image-2117"/></figure>`
    ]
}

export const mockImageFull = {
    blockName: "core/image",
    attrs: {
        align: "full",
        id: 2117
    },
    innerBlocks: [],
    innerHTML: `<figure class="wp-block-image alignfull"><img src="http://alcatraz.local/wp-content/plugins/block-unit-test/assets/images/placeholder.jpg" alt="" class="wp-image-2117"/><figcaption>Here is an example of an image block caption</figcaption></figure>`,
    innerContent: [
        `<figure class="wp-block-image alignfull"><img src="http://alcatraz.local/wp-content/plugins/block-unit-test/assets/images/placeholder.jpg" alt="" class="wp-image-2117"/><figcaption>Here is an example of an image block caption</figcaption></figure>`
    ]
}

export const mockImageLeft = {
    blockName: "core/image",
    attrs: {
        align: "left",
        id: 2117,
        width: 275,
        height: 196
    },
    innerBlocks: [],
    innerHTML: `<div class="wp-block-image"><figure class="alignleft is - resized"><img src="http://alcatraz.local/wp-content/plugins/block-unit-test/assets/images/placeholder.jpg" alt="" class="wp-image-2117" width="275" height="196"/></figure></div>`,
    innerContent: [
        `<div class="wp-block-image"><figure class="alignleft is - resized"><img src="http://alcatraz.local/wp-content/plugins/block-unit-test/assets/images/placeholder.jpg" alt="" class="wp-image-2117" width="275" height="196"/></figure></div>`
    ]
}

export const mockImageRight = {
    blockName: "core/image",
    attrs: {
        align: "right",
        id: 2117,
        width: 281,
        height: 200
    },
    innerBlocks: [],
    innerHTML: `<div class="wp-block-image"><figure class="alignright is - resized"><img src="http://alcatraz.local/wp-content/plugins/block-unit-test/assets/images/placeholder.jpg" alt="" class="wp-image-2117" width="281" height="200"/><figcaption>This one is captioned</figcaption></figure></div>`,
    innerContent: [
        `<div class="wp-block-image"><figure class="alignright is - resized"><img src="http://alcatraz.local/wp-content/plugins/block-unit-test/assets/images/placeholder.jpg" alt="" class="wp-image-2117" width="281" height="200"/><figcaption>This one is captioned</figcaption></figure></div>`
    ]
}

export const mockImages = [
    mockImageCenter,
    mockImageLeft,
    mockImageRight,
    mockImageWide,
    mockImageFull
]
