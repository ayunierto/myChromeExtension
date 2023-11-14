function addNotranslateClassToPre() {
  var preElements = document.getElementsByTagName("pre");

  for (var i = 0; i < preElements.length; i++) {
    var preElement = preElements[i];
    preElement.classList.add("notranslate");
  }
}

addNotranslateClassToPre();
