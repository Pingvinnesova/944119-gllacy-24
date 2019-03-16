var feedbackButton = document.querySelector(".feedback-button");
var modalFeedback = document.querySelector(".modal-feedback");
var modalFeedbackClose = document.querySelector(".modal-feedback-close");
var feedbackForm = document.querySelector(".feedback-form");
var feedbackName = document.querySelector(".feedback-name");
var feedbackEmail = document.querySelector(".feedback-email");
var feedbackText = document.querySelector(".feedback-text");
var feedbackBackground = document.querySelector(".background");
var modalSearch = document.querySelector(".modal-search");
var searchLink = document.querySelector(".search-link");
var searchInput = document.querySelector("[name=search]");
var modalLogin = document.querySelector(".modal-login");
var entranceLink = document.querySelector(".entrance-link");
var entranceEmail = document.querySelector(".entrance-email");
var entrancePassword = document.querySelector(".entrance-password");
var loginForm = document.querySelector(".entrance-form");
var cartLink = document.querySelector(".cart-link");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("feedbackName");
} catch (err) {
	isStorageSupport = false;
}

feedbackButton.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalFeedback.classList.add("modal-feedback-show");
	feedbackBackground.classList.add("background-wrapper");
	if (storage) {
		feedbackName.value = storage;
		feedbackEmail.focus();
	} else {
		feedbackName.focus();
	}
});

modalFeedbackClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalFeedback.classList.remove("modal-feedback-show");
	modalFeedback.classList.remove("modal-feedback-error");
	feedbackBackground.classList.remove("background-wrapper");
});

feedbackForm.addEventListener("submit", function(evt) {
	if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
		evt.preventDefault();
		modalFeedback.classList.remove("modal-feedback-error");	
		modalFeedback.offsetWidth = modalFeedback.offsetWidth;
		modalFeedback.classList.add("modal-feedback-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("feedbackName", feedbackName.value);
		}
	}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (modalFeedback.classList.contains("modal-feedback-show")) {
			evt.preventDefault();
			modalFeedback.classList.remove("modal-feedback-show");
			modalFeedback.classList.remove("modal-feedback-error");
			feedbackBackground.classList.remove("background-wrapper");
		}
	}
});

// Для поиска

searchLink.addEventListener("mouseover", function(evt) {
	evt.preventDefault();
	modalSearch.classList.add("modal-search-show");
	modalLogin.classList.remove("modal-login-show");
	modalLogin.classList.remove("modal-login-error");
	searchInput.focus();
});

modalSearch.addEventListener("mouseover", function(evt) {
	evt.preventDefault();
	modalSearch.classList.add("modal-search-show");
	searchInput.focus();
});

modalSearch.addEventListener("keydown", function(evt) {
	if (!searchInput.value) {
		if (evt.keyCode === 13) {
			evt.preventDefault();
			modalSearch.classList.remove("modal-search-error");	
			modalSearch.offsetWidth = modalSearch.offsetWidth;
			modalSearch.classList.add("modal-search-error");
		} 
	}
});

modalSearch.addEventListener("mouseout", function(evt) {
	evt.preventDefault();
	modalSearch.classList.remove("modal-search-show");
	modalSearch.classList.remove("modal-search-error");	
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (modalSearch.classList.contains("modal-search-show")) {
			evt.preventDefault();
			modalSearch.classList.remove("modal-search-show");
			modalSearch.classList.remove("modal-search-error");
		}
	}
});

// Форма входа

entranceLink.addEventListener("mouseover", function(evt) {
	evt.preventDefault();
	modalLogin.classList.add("modal-login-show");
	modalSearch.classList.remove("modal-search-show");
	modalSearch.classList.remove("modal-search-error");
	entranceEmail.focus();
});

modalLogin.addEventListener("mouseover", function(evt) {
	evt.preventDefault();
	modalLogin.classList.add("modal-login-show");
	entranceEmail.focus();
});

loginForm.addEventListener("submit", function(evt) {
	if (!entranceEmail.value || !entrancePassword.value) {
		evt.preventDefault();
		modalLogin.classList.remove("modal-login-error");	
		modalLogin.offsetWidth = modalLogin.offsetWidth;
		modalLogin.classList.add("modal-login-error");
	}
});

modalLogin.addEventListener("mouseout", function(evt) {
	evt.preventDefault();
	modalLogin.classList.remove("modal-login-show");
	modalLogin.classList.remove("modal-login-error");	
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (modalLogin.classList.contains("modal-login-show")) {
			evt.preventDefault();
			modalLogin.classList.remove("modal-login-show");
			modalLogin.classList.remove("modal-login-error");
		}
	}
});

//Корзина

cartLink.addEventListener("mouseover", function(evt) {
	evt.preventDefault();
	modalLogin.classList.remove("modal-login-show");
	modalSearch.classList.remove("modal-search-show");
});