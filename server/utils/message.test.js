const expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('Test message', () => {
    it('Should generate message object', () => {
        var from = 'Kwon';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message).toInclude({ from, text });
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(message.createdAt).toBeA('number');
    });
});

describe('Test location message', () => {
    it('should generate location message object', () => {
        var from = 'Admin';
        var latitude = 1;
        var longitude = 1;
        var url = 'https://www.google.com/maps?q=1,1';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message).toInclude({ from, url });
        expect(message.createdAt).toBeA('number');
    });
});