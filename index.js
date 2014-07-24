(function() {
  'use strict';

  var path = require('path');
  var fs   = require('fs');

  function SampleAddon(project) {
    this.project = project;
    this.name    = "Sample Addon";
  }

  function unwatchedTree(dir) {
    return {
        read:    function() { return dir; },
        cleanup: function() { }
      };
  }

  SampleAddon.prototype.treeFor = function treeFor(name) {
    var treePath = path.join('node_modules', 'sample-addon', name);

    if (fs.existsSync(treePath)) {
      return unwatchedTree(treePath);
    }
  };

  module.exports = SampleAddon;
}());
