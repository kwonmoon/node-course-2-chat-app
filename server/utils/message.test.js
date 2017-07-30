const expect = require('expect');

var { generateMessage } = require('./message');

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