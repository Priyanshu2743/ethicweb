// const fs = require('fs');
// const path = require('path');

// // Create a build directory
// const buildDir = path.join(__dirname, 'build');
// if (!fs.existsSync(buildDir)) {
//   fs.mkdirSync(buildDir);
// }

// // Copy static files
// const staticFiles = ['public'];
// staticFiles.forEach((dir) => {
//   const src = path.join(__dirname, dir);
//   const dest = path.join(buildDir, dir);
//   fs.cpSync(src, dest, { recursive: true });
// });

// // Create a bundle
// const bundle = {
//   app: './app.js',
//   routes: './routes/routes.js',
// };

// // Use a bundler like Webpack or Rollup to bundle your code
// // For simplicity, we'll just use a basic Node.js bundler
// const bundleCode = (file) => {
//   const code = fs.readFileSync(file, 'utf8');
//   return code;
// };

// Object.keys(bundle).forEach((key) => {
//   const file = bundle[key];
//   const code = bundleCode(file);
//   const dest = path.join(buildDir, key + '.js');
//   fs.writeFileSync(dest, code);
// });