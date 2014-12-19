/* global require, module */

var brocWriter = require('broccoli-writer');

var BroccoliSplitter = function BroccoliSplitter(inTree, options) {
    if (!(this instanceof BroccoliSplitter)) {
        return new BroccoliSplitter(inTree, options);
    }
    this.inTree = inTree;
    this.options = options || {};
};
BroccoliSplitter.prototype = Object.create(brocWriter.prototype);
BroccoliSplitter.prototype.constructor = BroccoliSplitter;
BroccoliSplitter.prototype.description = 'A broccoli plugin for splitting file into new files.';
module.exports = BroccoliSplitter;

BroccoliSplitter.prototype.write = function(readTree, destDir) {
    var self = this;
    return readTree(this.inTree).then(function (srcDir) {
        /* use srcDir and information from self.options to figure out which files to read from */
        /* use destDir and information from self.options to figure outwhich files to write to */
        /* synchronously read input files, do some processing, and write output files */
        console.log('option', self.option);
        console.log('destDir', destDir);
    });
};