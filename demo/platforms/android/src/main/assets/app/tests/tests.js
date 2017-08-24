var Braintree = require("nativescript-braintree").Braintree;
var braintree = new Braintree();

describe("greet function", function() {
    it("exists", function() {
        expect(braintree.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(braintree.greet()).toEqual("Hello, NS");
    });
});