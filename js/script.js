var link = document.querySelector(".button-contacts-info");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector (".modal-feedback-close");
var form = document.querySelector(".popup-form");
var login = document.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-email]");
var comment = popup.querySelector("[name=user-message]");
var overlay = document.querySelector(".overlay");
var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-map-close");
var overlay = document.querySelector(".overlay");

var isStorageSupport = true;
var storageLogin = "";
var storageEmail = "";

try {
  storageLogin = localStorage.getItem("login");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("overlay-show");

    if (storageLogin && storageEmail) {
      login.value = storageLogin;
      email.value = storageEmail;
      comment.focus();
    } else {
      login.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !comment.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
        localStorage.setItem("email", email.value);
      }
    }
  });

  var mapLink = document.querySelector(".map-link");

  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-map-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        overlay.classList.remove("overlay-show");
      }
    }
  });

  overlay.addEventListener("click", function () {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
  });

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
