/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: true,

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/videos',// Customize output path
          publicPath: '/_next/static/videos', // Customize public path
        },
      },
    });

    return config;
  },
}


