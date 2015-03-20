+function(undefined) {
    "use strict";

    var fs   = require("fs")
    ,   path = require("path");

    function files() {}

    files.prototype.listFilesArray = function(dir, callback) {
        function listFileSync(dir) {
            var stats = fs.lstatSync(dir);
            if (!stats.isDirectory()) {
                return [];
            }
            return fs.readdirSync(dir).reduce(function (fileArr, curr) {
                var currPath = path.join(dir, curr)
                ,   stat = fs.lstatSync(currPath);

                if (stat.isFile()) {
                    fileArr.push(currPath);
                } else if (stat.isDirectory()) {
                    listFileSync(currPath).map(function (path) {
                        fileArr.push(path);
                    });
                }
                return fileArr;
            }, []);
        }

        var arr = listFileSync(this.getAbsolutePath(dir));
        callback(null, arr);
    };

    files.prototype.getAbsolutePath = function(name) {
        return path.join(path.dirname(module.parent.filename), name);
    };

    module.exports = new files();

}();