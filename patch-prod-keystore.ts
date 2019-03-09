
(() => {
    /**
     * Patch environment.prod.ts
     */
    const fs = require('fs');
    const argv = require('yargs').argv;
    const env = './src/environments/environment' + (argv._[0] ? '.' + argv._[0] : '') + '.ts';
    let text: string = fs.readFileSync(env).toString();

    text = text.replace(`production: false,`, `production: true,`);
    text = text.replace(`import 'zone.js/dist/zone-error';`, '');


    fs.writeFileSync('./src/environments/environment.prod.ts', text);
})();

