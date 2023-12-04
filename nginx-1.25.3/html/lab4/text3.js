function loadTextFile(url, containerId) {
	var container = document.getElementById(containerId)
	var preElement = container.querySelector("p")

	var xhr = new XMLHttpRequest()
	xhr.open("GET", url, true)

	xhr.onload = function () {
		if (xhr.status === 200) {
			preElement.textContent = xhr.responseText
		}
	}

	xhr.send()
}

loadTextFile("text_file_3.txt", "text-div-3")
