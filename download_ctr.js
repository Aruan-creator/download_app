'use strict';

const { exec } = require('node:child_process');
const util = require('util');
const { prepareStrings } = require('./read_list.js');

const filePath = ('image_list.txt');

const execPromise = util.promisify(exec);

const image_request = async (url) => {
	try {
		const { stdout, stderr } = await execPromise(`wget ${url}`);
		console.log(`stdout: ${stdout}`);
		console.error(`stderror: ${stderr}`);
	} catch (error) {
		console.error(`exec error ${error}`);
	}
};

const main = async () => {
	try {
		const links = await prepareStrings(filePath);
		console.log(links);
		const promises = links.map(link => image_request(link));
		await Promise.all(promises);
	} catch(error) {
			console.error(error);
	}
}
main();
