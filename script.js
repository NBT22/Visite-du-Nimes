var Présentation = new Audio("./Audio/Présentation.wav");
      
      Présentation.addEventListener('ended', endHandler, false);
      function endHandler() {
        window.location.href = "./Slides/";
      }

var CIC = new Audio("./Audio/CIC Ad.wav");
      
      CIC.addEventListener('ended', endHandler, false);
      function endHandler() {
        window.location.href = "./Slides/";
      }