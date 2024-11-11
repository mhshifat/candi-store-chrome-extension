const path = require('path');
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    popup: path.resolve('./src/popup.tsx'),
    options: path.resolve('./src/options.tsx'),
    background: path.resolve('./src/background.ts'),
    contentScript: path.resolve('./src/content.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.tsx$/,
        exclude: /node_modules/ 
      },
      {
        use: ['style-loader', 'css-loader', {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              ident: "postcss",
              plugins: [tailwindcss, autoprefixer]
            }
          }
        }],
        test: /\.css$/
      },
      {
        type: 'assets/resource',
        test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/assets/manifest.json"), 
          to: path.resolve("dist")
        },
        {
          from: path.resolve("src/assets/images/icon.png"), 
          to: path.resolve("dist")
        },
        {
          from: path.resolve("src/global.css"), 
          to: path.resolve("dist")
        },
      ],
    }),
    ...getHtmlPlugins(["popup", "options"])
  ],
  optimization: {
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== "contentScript"
      }
    }
  }
}

function getHtmlPlugins(chunks) {
  return chunks.map(chunk => new HtmlPlugin({
    title: "CandiStore",
    filename: `${chunk}.html`,
    chunks: [chunk]
  }))
}