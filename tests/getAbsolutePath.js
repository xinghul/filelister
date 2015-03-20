+function(undefined) {
    "use strict";

    var files  = require("../index")
    ,   should = require("should");

    describe("Test getAbsolutePath : ", function() {
        it("should exist as a Function", function (done) {
            files.getAbsolutePath.should.be.Function;
            done();
        });
        it("should return the absolute directory.", function (done) {
            var absPath = files.getAbsolutePath("mock");
            absPath.indexOf("files/tests/mock").should.not.equal(-1);
            done();
        });
    });

}();