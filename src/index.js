require('dotenv').config();

console.log(process.env.apiKey);

function searchCity(city) {
	//make a api call ans update user interface
	let apiKey = '';
	let apiURL = 'https://api.shecodes.io/weather/v1/current?query={query}&key={key}';

	console.log(apiKey);
}

function handleSearchSubmit(event) {
	event.preventDefault();

	let searchInput = document.querySelector('#search-form-input');
	let cityElement = document.querySelector('#city');
	cityElement.innerHTML = searchInput.value;
	searchCity(searchInput.value);
}

let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener('submit', handleSearchSubmit);