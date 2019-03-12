
/**
 * @example how to run & test
 *  $ ts-node patch-environment.ts [name]
 *  $ ts-node patch-environment.ts work
 *  $ ts-node patch-environment.ts evieco
 */

const fs = require('fs');
const argv = require('yargs').argv;

if (!argv._[0]) {
    console.log('Error ==> patch-environment.ts ==> No parameter provied for environment name');
    process.exit(-9);
}

const env = './src/environments/environment.' + argv._[0] + '.ts';

// console.log('env: ', env);
// process.exit(0);


const text: string = fs.readFileSync(env).toString();

// console.log('text: ', text);




let obj = text.split('configXml:').pop().split(/^\s+\},/m).shift() + '}';

// console.log('text: ', obj); process.exit(-1);




// obj = obj.replace(/\s*\{/, '');

let configXml = {};
try {
    configXml = JSON.parse(obj);
} catch (e) {
    console.log('Failed to JSON.parse() configXml. It must have a complete JSON format for multi language support.');
    console.log('configXml: ', obj);
    process.exit(-1);
}

// console.log('configXml: ', configXml);

// const id = obj.match(/id:\s*\'([^\']+)/)[1];
// const version = obj.match(/version:\s*\'([^\']+)/)[1];
// const _name = obj.match(/name:(.*)/)[1];
// const description = obj.match(/description:\s*\'([^\']+)/)[1];

// let localeName = {};
// try {
//     localeName = JSON.parse(_name);
// } catch (e) {
//     console.log('Failed to JSON.parse() configXml.name. It must have a complete JSON format for multi language support.');
//     console.log('name: ', _name);
//     process.exit(-1);
// }
// console.log('name: ', localeName);


let config: string = fs.readFileSync('./config.xml').toString();
// console.log('config', config);



config = config.replace(/widget id=\"[^\"]+\"/, `widget id="${configXml['id']}"`);
config = config.replace(/version=\"[^\"]+\"/, `version="${configXml['version']}"`);
config = config.replace(/<name>[^<]+<\/name>/, `<name>${configXml['name']['en']}</name>`);
config = config.replace(/<description>[^<]+<\/description>/, `<description>${configXml['description']}</description>`);


fs.writeFileSync('./config.xml', config);


for (const ln of Object.keys(configXml['name'])) {
    const name = configXml['name'][ln];
    if (ln === 'ch') {
        writeTranslation('zh-rCN', name);
        writeTranslation('zh-rTW', name);
        writeTranslation('zh-rHK', name);
    } else if (ln === 'jp') {
        writeTranslation('ja', name);
    } else {
        writeTranslation(ln, name);
    }
}

function writeTranslation(ln: string, name: string) {
    /**
     * When there is `&amp;` in name, the translator convert it to `&amp;amp;` and the result text will include '&namp;'.
     * So, it strips `&amp;` to `&` first.
     */
    name = name.replace('&amp;', '&');
    const locale = `{
        "config_ios" : {
          "CFBundleDisplayName": "${name}",
          "CFBundleName": "${name}"
        },
        "config_android" : {
          "app_name": "${name}"
        }
      }`;
    fs.writeFileSync(`./translations/app/${ln}.json`, locale);
}

