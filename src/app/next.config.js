module.exports = {
  distDir: '../../dist/functions/next',
  webpack: (config) => {
    // Perform customizations to webpack config
    config.module.rules.push({
      test: /\.(mp4|webm|jpg|png|gif|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    });
    // Important: return the modified config
    return config;
  },
};
