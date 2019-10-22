// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var resArr = [];

  function recurse(node){
    if (node.classList) {
        if (node.classList.contains(className)) {
            resArr.push(node);
        }
     };

     if (node.childNodes.length !== 0) {
        for (var i = 0; i < node.childNodes.length; i++) {
            recurse(node.childNodes[i]);
        }
    }
  }

  recurse(document.body);

  return resArr;
};