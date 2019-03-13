var modalSearch = document.querySelector(".modal-search");
var searchLink = document.querySelector(".search-link");
var searchInput = document.querySelector("[name=search]");
var modalLogin = document.querySelector(".modal-login");
var entranceLink = document.querySelector(".entrance-link");
var entranceEmail = document.querySelector(".entrance-email");
var entrancePassword = document.querySelector(".entrance-password");
var loginForm = document.querySelector(".entrance-form");
var cartLink = document.querySelector(".cart-link");

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