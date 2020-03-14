var link = document.querySelector(".button-contacts-info");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector (".modal-feedback-close");
var form = document.querySelector(".popup-form");
var login = document.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-email]");
var comment = popup.querySelector("[name=user-message]");
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
  