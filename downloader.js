'use strict';
console.profile('start');

const { getImage } = require('./lib/getImage.js');

const filePath = require('./url/obj.json');

const downloadImages = async (imageList) => {
	console.profile('start');
	try {
		for(const partsObject of imageList) {
			console.log(partsObject);
			const { brand, articul, link } = partsObject;
		getImage(brand, articul, link);
		}
	} catch (error) {
		console.error(error);
	} finally {
		console.profile('end');
	}
};

const main = async () => {
	try {
	  const res = await downloadImages(filePath);
	} catch(error) {
		console.error(error);
	}
};
main();
