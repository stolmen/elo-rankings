const lights = require('../src/lights')
const sinon = require('sinon');

let fakeHttpService;
let lightsService;

describe('The light control component', function () {
    beforeEach(function () {
        fakeHttpService = {get: sinon.fake()};
        lightsService = lights.getLightsService(fakeHttpService, 'http://carlpi:5000');
    });

    describe('setLightColor', function () {
        it('should work', function () {
            lightsService.setLightColor(69, 0, 69)
            expect(fakeHttpService.get.calledOnce).to.be.true;
            let firstCallArgs = fakeHttpService.get.firstCall.args;
            expect(firstCallArgs.length).to.equal(1);
            expect(firstCallArgs[0]).to.equal('http://carlpi:5000/color/red=69&blue=0&green=69/');
        });
    });

    describe('setRed shortcut', function () {
        it('should work', function () {
            lightsService.setRed();
            expect(fakeHttpService.get.calledOnce).to.be.true;
            let firstCallArgs = fakeHttpService.get.firstCall.args;
            expect(firstCallArgs.length).to.equal(1);
            expect(firstCallArgs[0]).to.equal('http://carlpi:5000/color/red=255&blue=0&green=0/');
        });
    });

    describe('setBlue shortcut', function () {
        it('should work', function () {
            lightsService.setBlue();
            expect(fakeHttpService.get.calledOnce).to.be.true;
            let firstCallArgs = fakeHttpService.get.firstCall.args;
            expect(firstCallArgs.length).to.equal(1);
            expect(firstCallArgs[0]).to.equal('http://carlpi:5000/color/red=0&blue=255&green=0/');
        });
    });

    describe('setGreen shortcut', function () {
        it('should work', function () {
            lightsService.setGreen();
            expect(fakeHttpService.get.calledOnce).to.be.true;
            let firstCallArgs = fakeHttpService.get.firstCall.args;
            expect(firstCallArgs.length).to.equal(1);
            expect(firstCallArgs[0]).to.equal('http://carlpi:5000/color/red=0&blue=0&green=255/');
        });
    });

});
