
(() => {
    const fs = require('fs');
    const argv = require('yargs').argv;
    const env = './src/environments/environment' + (argv._[0] ? '.' + argv._[0] : '') + '.ts';
    const text: string = fs.readFileSync(env).toString();
    console.log(text);

    fs.writeFileSync('./src/environments/environment.prod.ts', text);
})();

