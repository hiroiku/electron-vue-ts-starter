const path = require('path');
const rules = require('./rules');
const optimization = require('./optimization');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const argv = process.argv.slice(2);

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../', 'src/ts/index.ts')
    },
    output: {
        path: path.resolve(__dirname, '../', 'public'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../', 'src')
        }
    },
    plugins: [
        new ExtractTextPlugin('css/style.css')
    ],
    module: rules,
    optimization: optimization,
};

if (argv.includes('production')) {
    module.exports.plugins = [...(module.exports.plugins || []),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        })
    ];
} else {
    module.exports.plugins = [...(module.exports.plugins || []),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: true
        })
    ];
}
