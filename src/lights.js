const querystring = require('querystring');

function getLightsService(httpService, baseUrl) {
	return {
		setGreen: function () {
			return this.setLightColor(0, 0, 255);
		},
		setRed: function () {
			return this.setLightColor(255, 0, 0);
		},
		setBlue: function () {
			return this.setLightColor(0, 255, 0);
		},
		setLightColor: function (red, blue, green) {
			const paramz = querystring.stringify({red, blue, green});
			const lightUrl = `${baseUrl}/color/${paramz}/`;
		    httpService.get(lightUrl);
		},
	};
}

module.exports = { getLightsService };
