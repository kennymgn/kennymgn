window.onload = init;
function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
	function handleButtonClick() {
		var songInput = document.getElementById("songTextInput");
		var song = songInput.value;
		var ul = document.getElementById("playlist");
		var li = document.createElement("li");
		li.innerHTML = song;
		if (song == "") {
			alert("Пустое значение");
		}
		else {
			ul.appendChild(li);
		}
	}
}
