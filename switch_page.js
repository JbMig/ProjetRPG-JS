// Load la page indiquée sur appui touche entrée (keycode 13)
document.onkeydown = function (e) {
  if (e.keyCode === 13) {
    window.location.assign("game.html");
  }
};
