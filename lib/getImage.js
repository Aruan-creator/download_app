'use strict';

const https = require('node:https');
const fs = require('node:fs');

const getImage = async (brand, articul, imageUrl) => {
	const imageName = `${articul}_${brand}.jpg`;
	const file = fs.createWriteStream(imageName);
	https.get(imageUrl, response => {
		response.pipe(file);

		file.on('finish', () => {
			file.close();
			console.log(`Image downloaded as ${imageName}`);
		});
	}).on('error', err => {
		fs.unlink(imageName);
		console.error(`Error downloading image: ${error.message}`);
	});
};

module.exports = { getImage };
