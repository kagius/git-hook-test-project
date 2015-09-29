var greeter = require('../src/js/greeter');

describe("Greeter function", function() {
    it("should say hello to the name being greeted", function() {
        expect(greet("test")).toBe("Hello test!");
    });
});