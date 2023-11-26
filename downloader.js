'use strict';

const { getImage } = require('./getImage.js');

const filePath = require('./obj.json');

const downloadImages = async (imageList) => {
	for(const partsObject of imageList) {
		console.log(partsObject);
		const { brand, articul, link } = partsObject;
		getImage(brand, articul, link);
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
