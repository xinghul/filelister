+function(undefined) {
    "use strict";

    var files  = require("../index")
    ,   should = require("should");

    // console.log(JSON.stringify(files));

    describe("Test listFilesArray : ", function() {
        it("should exist as a Function", function (done) {
            files.listFilesArray.should.be.Function;
            done();
        });
        it("should return an array.", function (done) {
            files.listFilesArray("mock", function (err, files) {
                console.log(files);
                files.length.should.not.be.undefined;
                done();
            });
        });
    });

}();