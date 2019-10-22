// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  // your code here
  var resArr = [];
  var currentElement = element || document.body;

  if (currentElement.classList) {
    if (currentElement.classList.contains(className)) {
      resArr.push(currentElement);
    }
  }

  if (currentElement.childNodes.length !== 0) {
    for (var i = 0; i < currentElement.childNodes.length; i++) {
      getElementsByClassName(className, currentElement.childNodes[i]);
    }
  }

  return resArr;
};
