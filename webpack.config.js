const path = require('path'),
    miniCssExtractPlugin = require('mini-css-extract-plugin'),
    distDir= path.resolve(__dirname, 'dist'),
    srcDir = path.resolve(__dirname, 'src'),
    extractPlugin = new miniCssExtractPlugin({
        filename: 'styles.css',
        chunkFilename: 'styles-[hash].css',
        ignoreOrder: false
    });

const config = {
    entry: `${srcDir}/index.js`,
    output: {
        path: `${distDir}/app`,
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: srcDir,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [extractPlugin]
};

module.exports = config;
