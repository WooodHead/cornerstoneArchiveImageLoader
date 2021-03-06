const path = require('path');
const webpack = require('webpack');
const rootPath = process.cwd();
const pkgPath = path.join(rootPath, "package");
const pkg = require(pkgPath);

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const date = ('0' + today.getDate()).slice(-2);

  return `${year}-${month}-${date}`;
}

const getBanner = () => {
  return `/*! ${pkg.name} - ${pkg.version} - ` +
         `${getCurrentDate()} ` +
         `| (c) 2017 Chris Hafey | ${pkg.homepage} ` +
		 `| contribution 2017 Marco Barnig */`
}

module.exports = () => {
  return new webpack.BannerPlugin({
    banner: getBanner(),
    entryOnly: true,
    raw: true
  });
}