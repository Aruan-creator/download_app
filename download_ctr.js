'use strict';

const { getImage } = require('./getImage.js');
const util = require('util');



const partsObjects = [
	{ 
		'brand': 'SAT',
		'articul': 'HY0020',
		'link': 'https://static.autotrade.su/nomenclature/wm/b/7d/7d5b2b4599.jpg' 
	},
];
const filePath = ('image_list.txt');
const brandName = '';



const downloadImages = async (imageList) => {
	for(const partsObject of partsObjects) {
		const { brand, articul, link } = partsObject;
		getImage(brand, articul, link);
	}
};

const main = async () => {
	try {
	  const res = downloadImages(partsObjects);
		console.log(res);
	} catch(error) {
		console.error(error);
	}
};
main();
