exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
      return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
      return fn.call(obj);
  },

  functionFunction: function (str) {
      return function (newStr) {
          return str + ", " + newStr;
      }
  },

  makeClosures : function(arr, fn) {
      var resultArr = [];
      for (var i = 0; i < arr.length; i++) {
          resultArr.push(fn(arr[i]));
      }
      var funcArr = [];
      for (var i = 0; i < arr.length; i++) {
          funcArr.push(function () {
              return resultArr[i];
          });
      }
      return funcArr;
  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
