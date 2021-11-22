import Path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default function (env, argv) {
    return {
        entry: Path.join(process.cwd(), './src/main.js'),
        output: {
            path: Path.join(process.cwd(), './dist'),
            filename: 'bundle.js',
        },
        mode: 'development',
        devtool: 'eval-cheap-module-source-map',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                Path.join(process.cwd(), '../babel-preset-srax/src/main.mjs')
                            ]
                        }
                    }
                },
                {
                    test: /\.less$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader', options: {
                                modules: {
                                    localIdentName: '[local]-[hash:base64:5]',
                                    exportLocalsConvention: 'camelCase'
                                }
                            }
                        },
                        { loader: 'less-loader' }
                    ],
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ]
    }
}