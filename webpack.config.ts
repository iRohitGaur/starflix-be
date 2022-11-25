const path = require("path");

module.exports = {
  entry: "./app.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "api.bundle.js",
  },
  target: "node",
};
