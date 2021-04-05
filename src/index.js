const package = require('../package');
const config = require('./config'); // todo parse this and use as constructors to the services

// services
const app = require('./application');
const db = require('./database');
const api = require('./api');
const lights = require('./lights');
const slackBot = require('./slack-bot');
const http = require('./http');

const port = process.env.PORT || 3005;

// ----- compose app dependencies
// -- pleb services
const dbService = db.getDbService();
const httpService = http.getHttpService();
const lightsService = lights.getLightsService(httpService, 'http://carlpi:5000');
const apiService = api.getApiService(dbService, lightsService);
// -- top level services
const applicationService = app.getAppService(apiService);  // express.js service
if (config.slackApiToken) {
	const slackbotService = slackBot.getSlackService(apiService, config.slackApiToken, config.slackChannel);
	slackbotService.start().catch(console.error);
}

// -------------------

applicationService.listen(port, () => {
	console.log('Listening on', port);
});

console.log('Elo ranking server %s', package.version);
