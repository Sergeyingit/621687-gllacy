var link = document.querySelector(".contacts .btn");
var popup = document.querySelector(".back-communication");
var closePopup = popup.querySelector(".btn");
var name = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");

var isStorageSupport = true;
var storage = "";
var storageEmail = "";

try {
	storage = localStorage.getItem("name");
	storageEmail = localStorage.getItem("email");
} catch (err) {
	isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
    	name.value = storage;
    	if (storageEmail) {
    		email.value = storageEmail;
    		letter.focus();
    	} else {
    		email.focus();
    	}

    } else {
    name.focus();
    }
});

closePopup.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove ("modal-error");
})
form.addEventListener("submit", function (evt) {
	if (!name.value || !email.value || letter.value) {
	evt.preventDefault();
	popup.classList.remove("modal-error");
	popup.offsetWidth = popup.offsetWidth;
	popup.classList.add("modal-error");
    } else {
    	if (isStorageSupport) {
    		localStorage.setItem("name", name.value);
    		localStorage.setItem("email", email.value);
    	}
    }
})

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
})