export const mockCover = {
    blockName: "core/cover",
    attrs: {
        url: "http://alcatraz.local/wp-content/plugins/block-unit-test/assets/images/placeholder.jpg",
        id: 2117
    },
    innerBlocks: [
        {
            blockName: "core/paragraph",
            attrs: {
                align: "center",
                placeholder: "Write title…",
                fontSize: "large"
            },
            innerBlocks: [],
            innerHTML: `<p class="has-text-align-center has-large-font-size">Wide Cover Image Block</p>`,
            innerContent: [
                `<p class="has-text-align-center has-large-font-size">Wide Cover Image Block</p>`
            ]
        }
    ],
    innerHTML: `<div class="wp-block-cover has-background-dim" style="background-image: url(http://alcatraz.local/wp-content/plugins/block-unit-test/assets/images/placeholder.jpg)"><div class="wp-block-cover__inner-container"></div></div>`,
    innerContent: [
        `<div class="wp-block-cover has-background-dim" style="background-image: url(http://alcatraz.local/wp-content/plugins/block-unit-test/assets/images/placeholder.jpg)"><div class="wp-block-cover__inner-container">`,
        null,
        "</div></div> "
    ]
}

export const mockColumns = {
    blockName: "core/columns",
    attrs: {
        className: "has-2-columns"
    },
    innerBlocks: [
        {
            blockName: "core/column",
            attrs: [],
            innerBlocks: [
                {
                    blockName: "core/paragraph",
                    attrs: [],
                    innerBlocks: [],
                    innerHTML: " <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor.</p> ",
                    innerContent: [
                        " <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor.</p> "
                    ]
                }
            ],
            innerHTML: `<div class="wp-block-column"></div>`,
            innerContent: [
                `<div class="wp-block-column">`,
                null,
                "</div> "
            ]
        },
        {
            blockName: "core/column",
            attrs: [],
            innerBlocks: [
                {
                    blockName: "core/paragraph",
                    attrs: [],
                    innerBlocks: [],
                    innerHTML: " <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor.</p> ",
                    innerContent: [
                        " <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor.</p> "
                    ]
                }
            ],
            innerHTML: `<div class="wp-block-column"></div>`,
            innerContent: [
                `<div class="wp-block-column">`,
                null,
                "</div> "
            ]
        }
    ],
    innerHTML: `<div class="wp-block-columns has-2-columns"> </div>`,
    innerContent: [
        `<div class="wp-block-columns has-2-columns">`,
        null,
        " ",
        null,
        "</div> "
    ]
}
