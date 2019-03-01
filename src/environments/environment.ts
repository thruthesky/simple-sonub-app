// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  simplest: {
    backendUrl: 'https://api.sonub.com/api.php',
    enableLoginToAllSubdomains: false
  },
  philgo: {
    url: {
      // webServer: 'https://local.philgo.com/api.php', // local server
      // fileServer: 'https://local.philgo.com/api.php' // local server

      webServer: 'https://philgo.com/api.php', // remote server
      fileServer: 'https://file.philgo.com/api.php' // remote server
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
