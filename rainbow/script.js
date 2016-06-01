var button = document.querySelector('button.add');
var buttonClear = document.querySelector('button.clear');
var div = document.querySelector('.divs');

function insertRainbow() {
	var red = Math.round(Math.random() * 255);
	var blue = Math.round(Math.random() * 255);
	var green = Math.round(Math.random() * 255);

	div.innerHTML += '<span style="background-color: rgb(' + red + ', ' + green +', ' + blue + ')"></span>';
}

button.addEventListener('click', insertRainbow);
buttonClear.addEventListener('click', function() {
	div.innerHTML = '';
});
