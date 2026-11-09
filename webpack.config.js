const path = require('path'); // Node.js module for file paths

module.exports = {
    entry: './src/index.js', // Source file Webpack starts from
    output: {
        filename: 'bundle.js', // Name of the bundled output file
        path: path.resolve(__dirname, 'dist'), // Output folder
    },
    mode: 'production', // Minify and optimise for live deployment
};