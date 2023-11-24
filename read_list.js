'use strict';

const fs = require('node:fs');
const readLine = require('node:readline');

//const fileName = 'image_list.txt';
const prepareStrings = (fileName) => {
	return new Promise((resolve, reject) => {
		const rl= readLine.createInterface({
			input: fs.createReadStream(fileName),
			crlfDelay: Infinity,
		});

		const links = [];

		rl.on('line', (line) => {
			links.push(line);
		});
		
		rl.on('close', () => {
			resolve(links);
		});

		rl.on('error', (err) => {
			reject(err);
		});
	});
};

module.exports = { prepareStrings };
