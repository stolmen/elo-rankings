const http = require('http');
function getHttpService(){
    // this is shit. fix this.
    return {
        get: async function (url, responseCb) {
            http.get(url).on('response', responseCb
            return await ;
        }
    };
}
module.exports = {getHttpService};
