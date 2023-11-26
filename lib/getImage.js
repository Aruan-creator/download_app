'use strict';

const https = require('node:https');
const fs = require('node:fs').promises;
const { createWriteStream } = require('node:fs');
const path = require('node:path');
const savePath = './photos';

const getImage = async (brand, articul, imageUrl) => {
	try {
		const imageName = `${articul}_${brand}.jpg`;
		const fullPath = path.join(savePath, imageName);
		console.log(fullPath);

		await fs.mkdir(savePath, { recursive: true });

		const file = await createWriteStream(fullPath);
		https.get(imageUrl, response => {
			response.pipe(file);

			file.on('finish', () => {
				file.close();
				console.log(`Image downloaded as ${imageName}`);
			});
		}).on('error', err => {
			fs.unlink(fullPath);
			console.error(`Error downloading image: ${error.message}`);
		});
	} catch (err) {
		console.error(`Error in getImage: ${err.message}`);
	}
};

module.exports = { getImage };
