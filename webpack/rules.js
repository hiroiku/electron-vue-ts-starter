const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const argv = process.argv.slice(2);

module.exports = {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                css: ExtractTextPlugin.extract({
                    fallback: 'vue-style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: argv.includes('production')
                        }
                    }, {
                        loader: 'sass-loader',
                    }]
                }),
                sass: ExtractTextPlugin.extract({
                    fallback: 'vue-style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: argv.includes('production')
                        }
                    }, {
                        loader: 'sass-loader',
                    }]
                }),
                scss: ExtractTextPlugin.extract({
                    fallback: 'vue-style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: argv.includes('production')
                        }
                    }, {
                        loader: 'sass-loader',
                    }]
                })
            },
            postcss: [autoprefixer]
        }
    }, {
        test: /\.ts$/,
        use: [{
            loader: 'ts-loader',
            options: {
                appendTsSuffixTo: [/\.vue$/]
            }
        }]
    }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
            name: 'img/[name].[ext]'
        }
    }, {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file-loader',
        options: {
            name: 'media/[name].[ext]'
        }
    }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
            name: 'fonts/[name].[ext]'
        }
    }]
};
