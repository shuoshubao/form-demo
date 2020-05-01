const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';

module.exports = {
    publicPath: isProduction ? 'https://shuoshubao.github.io/form-demo/dist/' : '/'
};
