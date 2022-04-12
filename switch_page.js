// Load la page indiquée sur appui touche entrée (keycode 13)
document.onkeydown = function (e) {
  if (e.keyCode === 13) {
    window.location.assign("index_steven.html");
  }
};

// Pas fonctionnel / Exemple tiré de https://developer.mozilla.org/fr/docs/Web/Guide/AJAX/Getting_Started
/*(function () {
  var httpRequest;
  document.addEventListener("keydown", makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();
    document.onkeydown = function (e) {
      if (!httpRequest) {
        alert("Abandon :( Impossible de créer une instance de XMLHTTP");
        return false;
      }
      if (e.keyCode === 13) {
        httpRequest.onreadystatechange = switchPage;
        // Permet de récupérer le fichier sur keydown touche entrée (keycode 13) (visible dans inspecter élément -> Réseau -> scroll down, le fichier est bien là)
        httpRequest.open("GET", "index_steven.html", true);
        httpRequest.send();
      }
    };
  }

  function switchPage() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        // Need trouver un moyen de load
      } else {
        alert("Il y a eu un problème avec la requête.");
      }
    }
  }
})();*/
