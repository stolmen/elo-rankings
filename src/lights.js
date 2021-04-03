const http = require('http');

function getLightsService() {
	return {
		setColor: function (color) {
		    let red = 0;
		    let green = 0;
		    if (color === 'red') {
                red = 255;
            } else if (color === 'green') {
                green = 255;
            } else {
		        throw `color ${color} not supported, sorry.`;
            }

		    // todo pass hostname in as an input to service constructor
			const lightUrl = 'http://carlpi:5000/color?red=' + red + '&blue=0&green=' + green;
			makeSafeHttpCall(lightUrl);
		},
	};
}

function makeSafeHttpCall(url) {
	http.get(url, () => undefined).on('error', console.log);
}

module.exports = { getLightsService };
