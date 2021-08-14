const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    //   Here we tell webpack to create the final bundled file in dist folder in the root of the project
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        // Here we tell webpack to use babel-loader to transpile files that end with .js
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            //   Here we have 2 presets @babel/preset-env for transpiling ES2015+ syntax and we have @babel/preset-react for transpiling react code
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        //   Babel config to import CSS files
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        //   Babel config to import and bundle images
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        //   Babel config to import SVG as react component
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    //   This will take the /public/index.html and inject script tag to it. And move that HTML file to the dist folder
    //  Once the bundled javascript file is created we need to tell webpack to inject it as a script tag to the HTML file. To do that we first need to install a webpack plugin that will help us do it.
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
