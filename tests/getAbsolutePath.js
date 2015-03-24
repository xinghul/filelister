+function(undefined) {
    "use strict";

    var fslister = require("../index")
    ,   should   = require("should");

    describe("Test getAbsolutePath : ", function() {
        it("should exist as a Function", function (done) {
            fslister.getAbsolutePath.should.be.Function;
            done();
        });
        it("should return the absolute directory.", function (done) {
            var absPath = fslister.getAbsolutePath("mock");
            absPath.indexOf("tests/mock").should.not.equal(-1);
            done();
        });
    });

}();