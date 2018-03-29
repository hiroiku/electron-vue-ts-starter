const autoprefixer = require('autoprefixer');

module.exports = {
    splitChunks: {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'initial',
                enforce: true
            }
        }
    }
};
