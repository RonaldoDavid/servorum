
const { remote } = require('electron')

document.getElementById('min').addEventListener('click', () => {
	remote.getCurrentWindow().minimize()
})

document.getElementById('close').addEventListener('click', () => {
	remote.app.quit()
})