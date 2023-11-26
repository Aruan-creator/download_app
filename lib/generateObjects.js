'use strict';

const fs = require('node:fs').promises;

const readData = async (filePath) => {
	try {
		const data =  await fs.readFile(filePath, 'utf-8');
		return JSON.parse(data);
	} catch (error) {
		throw new Error(`Error reading file: ${error.message}`);
	}
};

const generateObjects = async (filePath) => {
	try {
		const objects = [];
		const jsonData = await readData(filePath);
		objects.push(...jsonData);
		return objects;
	} catch (error) {
		throw new Error(`Error generating objects: ${error.message}`);
	}
};

module.exports = { generateObjects };
