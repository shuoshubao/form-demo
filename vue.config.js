const { NODE_ENV, AWP_DEPLOY_ENV } = process.env;
const isProduction = NODE_ENV === 'production';

module.exports = {
    publicPath: isProduction? 'https://shuoshubao.github.io/form-demo/dist/' : '/'
};
