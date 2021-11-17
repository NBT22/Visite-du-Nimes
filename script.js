var Présentation = new Audio("./Audio/Présentation.wav");
      
      Présentation.addEventListener('ended', présentationEndHandler, false);
      function présentationEndHandler() {
        window.location.href = "./Slides/";
      }

var CIC = new Audio("./Audio/CIC Ad.wav");
      
      CIC.addEventListener('ended', CICEndHandler, false);
      function CICEndHandler() {
        window.location.href = "https://www.cic.fr/fr/agences/particuliers/10096/18057/00/000?y_source=1_MTQxNjA0MTAtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D";
      }