'use strict';

module.exports = {
	mode: 'development',
	entry: './src/js/script.js',
	output: {
		filename: './bundle.js',
		path: 'E:/Front-End/SASS/src/js'
	},
	watch: true,

	devtool: "source-map",

	module: {}
};

