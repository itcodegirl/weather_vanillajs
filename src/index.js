require('dotenv').config();

console.log(process.env.apiKey);

function searchCity(city) {
	let apiKey = '';

	console.log(apiKey);
}

function handleSearchSubmit(event) {
	event.preventDefault();

	let searchInput = document.querySelector('#search-form-input');
	let cityElement = document.querySelector('#city');
	cityElement.innerHTML = searchInput.ariaValueMax;
}

let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener('submit', handleSearchSubmit);