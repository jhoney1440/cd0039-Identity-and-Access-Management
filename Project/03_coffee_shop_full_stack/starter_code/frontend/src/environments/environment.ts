/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-bfkiu08eoualvgbo.us', // the auth0 domain prefix
    audience: 'image', // the audience set for the auth0 app
    clientId: 'pifgl8DGELePD7Ew2ZwKBbO4erzXVcmD', // the client id generated for the auth0 app
    callbackURL: 'http://127.0.0.1:8100/login-results', // the base url of the running ionic application. 
  }
};
