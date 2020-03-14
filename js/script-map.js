var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-map-close");
var overlay = document.querySelector(".overlay");
 
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
    overlay.classList.add("overlay-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
        overlay.classList.remove("overlay-show");
      }
    }
  });
  
  overlay.addEventListener("click", function () {
    mapPopup.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
  });