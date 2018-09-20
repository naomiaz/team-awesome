const path = require('path');
module.exports = (baseConfig, configType) => {
  baseConfig.resolve.modules.push(path.resolve(__dirname, '../src'));
  baseConfig.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]-[hash:base64:8]'
          },
        },
        {
          loader: 'sass-loader'
        }
      ],
    }
  );
};
