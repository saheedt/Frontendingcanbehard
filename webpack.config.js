const path = require('path'),
    miniCssExtractPlugin = require('mini-css-extract-plugin'),
    dotenv = require('dotenv'),
    webpack = require('webpack'),
    distDir= path.resolve(__dirname, 'dist'),
    srcDir = path.resolve(__dirname, 'src'),
    extractPlugin = new miniCssExtractPlugin({
        filename: 'styles.css',
        chunkFilename: 'styles-[hash].css',
        ignoreOrder: false
    });

dotenv.config({path: `${__dirname}/.env`});

const environmentVariables = new webpack.DefinePlugin({
    'process.env': {
        APIKEY: JSON.stringify(process.env.APIKEY),
        APIBASEURL: JSON.stringify(process.env.APIBASEURL),
        APIMOVESEARCHPATH: JSON.stringify(process.env.APIMOVESEARCHPATH),
        APIMOVIEPOSTERBASE: JSON.stringify(process.env.APIMOVIEPOSTERBASE)
    }
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
    plugins: [extractPlugin, environmentVariables]
};

module.exports = config;
