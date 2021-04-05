const http = require('../src/http')


const httpService = http.getHttpService();

describe('The HTTP module', function () {
    describe('get()', function () {
        it('should be able to be synchronously called', function (done) {
            httpService.get('http://googlaezzzz.com').then((x) => {
                done();
            })
        });
        it('should be able to be asynchronously called', async function () {
            const result = await httpService.get('http://google.com');
        })
    })

})