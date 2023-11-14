function addNotranslateClassToPre() {
  var preElements = document.getElementsByTagName("pre");

  for (var i = 0; i < preElements.length; i++) {
    var preElement = preElements[i];
    preElement.classList.add("notranslate");
  }

  var aElements = document.getElementsByTagName("a");

  for (var i = 0; i < aElements.length; i++) {
    var preElement = aElements[i];
    preElement.classList.add("notranslate");
  }

  var codeElements = document.getElementsByTagName("code");

  for (var i = 0; i < codeElements.length; i++) {
    var preElement = codeElements[i];
    preElement.classList.add("notranslate");
  }
}

addNotranslateClassToPre();
