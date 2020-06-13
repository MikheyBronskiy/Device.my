var link = document.querySelector(".write-us-link");
var link_map = document.querySelector(".map-link");

var popup = document.querySelector(".modal-write-us");
var popup_map = document.querySelector(".modal-map");
var close = popup.querySelector(".modal-close");
var close_map = popup_map.querySelector(".modal-close");

var form = popup.querySelector("form");
var user_name = popup.querySelector("[name=user-name]");
var user_email = popup.querySelector("[name=user-email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("user_name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-write-us-show");

  if (storage) {
    user_name.value = storage;
    user_email.focus();
  } else {
    user_name.focus();
  }
});

link_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_map.classList.add("modal-map-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-write-us-show");
  popup_map.classList.remove("modal-map-show");
});

close_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_map.classList.remove("modal-map-show");
});

form.addEventListener("submit", function (evt) {
  if (!user_name.value || !user_email.value) {
    evt.preventDefault();
    console.log("Форма не заполнена");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("user_name", user_name.value);
      localStorage.setItem("user_email", user_email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-write-us-show")) {
      popup.classList.remove("modal-write-us-show");
    } else {
      if (popup_map.classList.contains("modal-map-show")) {
        popup_map.classList.remove("modal-map-show");
      }
    }
  }
});
