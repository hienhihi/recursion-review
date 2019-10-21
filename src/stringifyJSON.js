// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var arr = [];
  var stringifyObj;
  if (typeof obj === 'string') {
    stringifyObj = '"' + obj + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    stringifyObj = '' + obj;
  } else if (Array.isArray(obj)) {
    stringifyObj = '[';
    for (var i = 0; i < obj.length; i++) {
      if (obj[i] === undefined || typeof obj[i] === 'function') {
        stringifyObj += 'null';
      } else {
        stringifyObj += stringifyJSON(obj[i]);
      }
      if ( i !== obj.length - 1 ) {
        stringifyObj += ',';
      }
    }
    stringifyObj = stringifyObj + ']';
  } else if ( typeof obj === 'object') {
    stringifyObj = '{';
    for (var key in obj) {
      if ( typeof obj[key] === 'function' || obj[key] === undefined ) {
        arr.push();
      } else {
        arr.push('"' + key + '"' + ':' + stringifyJSON(obj[key]));
      }
    }
    stringifyObj += arr.join(',') + '}';
  }

  return stringifyObj;
};
