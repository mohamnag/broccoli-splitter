/* global require, module */

var CachingWriter = require('broccoli-caching-writer');
var path = require('path');
var mkdirp = require('mkdirp');
var includePathSearcher = require('include-path-searcher');
var Promise = require('rsvp').Promise;

module.exports = BroccoliSplitter;
BroccoliSplitter.prototype = Object.create(CachingWriter.prototype);
BroccoliSplitter.prototype.constructor = BroccoliSplitter;
BroccoliSplitter.prototype.description = 'A broccoli plugin for splitting one file into new files.';

function BroccoliSplitter(inputTrees, options) {
    if (!(this instanceof BroccoliSplitter)) {
        return new BroccoliSplitter(inputTrees, options);
    }

    CachingWriter.call(this, inputTrees, options);

    this.debugLog('inputTrees', inputTrees);
    this.debugLog('options', options);

    this.inputTrees = inputTrees;
    options = options || {};
    this.options = {};

    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            this.options[key] = options[key];
        }
    }

    this.debugLog('this.options', this.options);
}

BroccoliSplitter.prototype.debugLog = function() {
    //if (this.options.debug) {
        console.log.apply(null, arguments);
    //}
};

BroccoliSplitter.prototype.updateCache = function(srcDir, destDir) {
    var self = this;

    self.debugLog('Running BroccoliSplitter updateCache');

    self.debugLog('srcDir', srcDir);
    self.debugLog('destDir', destDir);

    for (var key in self.options) {
        var splitTask = self.options[key];
        self.debugLog('splitTask', splitTask);

        var inputFile = includePathSearcher.findFileSync(splitTask.input, srcDir);
        self.debugLog('inputFile', inputFile);

        var destFile = path.join(destDir, splitTask.output);
        mkdirp.sync(path.dirname(destFile));


        // find x between splitTask.from to splitTask.to and copy it to destFile
    }

};
