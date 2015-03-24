+function(undefined) {
    "use strict";

    var fslister = require("../index")
    ,   should   = require("should");

    describe("Test list related functions : ", function() {
        describe("Test listAsArray : ", function() {
            it("should exist as a Function", function (done) {
                fslister.listAsArray.should.be.Function;
                done();
            });
            it("should return an array.", function (done) {
                console.log(1);
                fslister.listAsArray("mock", function (err, files) {
                    console.log(files);
                    files.length.should.not.be.undefined;
                    done();
                });
                console.log(2);
            });
        });

        describe("Test listAsArraySync : ", function() {
            it("should exist as a Function", function (done) {
                fslister.listAsArraySync.should.be.Function;
                done();
            });
            it("should return an array.", function (done) {
                var files = fslister.listAsArraySync("mock");
                files.length.should.not.be.undefined;
                done();
            });
        });
    });
        

}();