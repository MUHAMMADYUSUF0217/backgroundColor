let storageColor = window.localStorage.getItem('color')
body.style.backgroundColor = storageColor
inputColor.value = storageColor
 inputColor.onchange = (event) => {
 	window.localStorage.setItem('color', event.target.value)
 	body.style.backgroundColor = event.target.value
 }

 button.onclick = () => {
 	window.localStorage.removeItem('color')
 	body.style.backgroundColor = storageColor
 }