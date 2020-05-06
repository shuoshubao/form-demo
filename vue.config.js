const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';

module.exports = {
    publicPath: isProduction ? 'https://shuoshubao.github.io/form-demo/dist/' : '/',
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.txt$/i,
                    use: [
                        {
                            loader: 'raw-loader',
                            options: {
                                esModule: false
                            }
                        }
                    ]
                }
            ]
        }
    }
};
