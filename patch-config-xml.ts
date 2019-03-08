

const fs = require('fs');
const argv = require('yargs').argv;

const env = './src/environments/environment' + ( argv._[0] ? '.' + argv._[0] : '' ) + '.ts';

// console.log('env: ', env);
// process.exit(0);


const text: string = fs.readFileSync(env).toString();

let obj = text.split('configXml:').pop().split('}').shift();


obj = obj.replace(/\s*\{/, '');


const id = obj.match(/id:\s*\'([^\']+)/)[1];
const version = obj.match(/version:\s*\'([^\']+)/)[1];
const _name = obj.match(/name:\s*\'([^\']+)/)[1];
const description = obj.match(/description:\s*\'([^\']+)/)[1];



let config: string = fs.readFileSync('./config.xml').toString();
// console.log('config', config);



config = config.replace(/widget id=\"[^\"]+\"/, `widget id="${id}"`);
config = config.replace(/version=\"[^\"]+\"/, `version="${version}"`);
config = config.replace(/<name>[^<]+<\/name>/, `<name>${_name}</name>`);
config = config.replace(/<description>[^<]+<\/description>/, `<description>${description}</description>`);


fs.writeFileSync('./config.xml', config);
