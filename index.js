+function(undefined) {
    "use strict";

    var fs   = require("fs")
    ,   path = require("path");

    function files() {}

    files.prototype.listAsArray = function(dir, callback) {
        function list(dir) {
            var stats = fs.lstatSync(dir);
            if (!stats.isDirectory()) {
                return [];
            }
            return fs.readdirSync(dir).reduce(function (fileArr, curr) {
                var currPath = path.join(dir, curr)
                ,   stat     = fs.lstatSync(currPath);

                if (stat.isFile()) {
                    fileArr.push(currPath);
                } else if (stat.isDirectory()) {
                    list(currPath).map(function (path) {
                        fileArr.push(path);
                    });
                }
                return fileArr;
            }, []);
        }

        return callback(null, list(this.getAbsolutePath(dir)));
    };

    files.prototype.listAsArraySync = function(dir) {
        function list(dir) {
            var stats = fs.lstatSync(dir);
            if (!stats.isDirectory()) {
                return [];
            }
            return fs.readdirSync(dir).reduce(function (fileArr, curr) {
                var currPath = path.join(dir, curr)
                ,   stat     = fs.lstatSync(currPath);

                if (stat.isFile()) {
                    fileArr.push(currPath);
                } else if (stat.isDirectory()) {
                    list(currPath).map(function (path) {
                        fileArr.push(path);
                    });
                }
                return fileArr;
            }, []);
        }

        return list(this.getAbsolutePath(dir));
    };

    files.prototype.list = function(dir, callback) {
        function walk(dir) {

        }
        // var json = list
    };

    files.prototype.listSync = function(dir) {
        function walk(dir) {
            var stats = fs.lstatSync(dir)
            ,   ret   = {};
            if (!stats.isDirectory()) {
                return ret;
            }
            var contents = fs.readdirSync(dir)
            ,   files    = []
            ,   dirs     = [];
            for (var i = 0, content = null; i < contents.length; i ++) {
                content = contents[i];
                stats = fs.lstatSync(path.join(dir, content));
                if (stats.isFile()) {
                    files.push(content);
                } else if (stats.isDirectory()) {
                    dirs.push(walk(path.join(dir, content)));
                }
            }
            ret.files = files;
            ret.dirs  = dirs;
            ret.path  = dir;
            return ret;
        }
        return walk(this.getAbsolutePath(dir));
    };

    files.prototype.getAbsolutePath = function(name) {
        return path.join(path.dirname(module.parent.filename), name);
    };

    module.exports = new files();

}();