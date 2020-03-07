const pxtoviewport = require('postcss-px-to-viewport');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer,
        pxtoviewport({
            viewportWidth: 375
        })
    ]
};
