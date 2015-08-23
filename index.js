'use strict';

var Keyrotator = function (keysIn) {
  var keys = keysIn;
  var currentKey = 0;

  var getCurrentKey = function () {
    if (currentKey >= keys.length){
      throw Error('not enough keys');
    }
    var key = keys[currentKey];
    key.used = (key.used || 0) + 1;
    return key;
  };

  var getNextKey = function () {
    currentKey++;
    return getCurrentKey();
  };

  this.getSize = function () {    
    var count = keys.reduce(function (previous, current){
      return previous + current.limit;
    }, 0);
    return count;
  };

  this.getKey = function () {    
    var key = getCurrentKey();
    if (key.used > key.limit) {
      key = getNextKey();
    }    
    return key.key
  };
};

module.exports = Keyrotator;