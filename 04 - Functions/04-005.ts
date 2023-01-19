function log(message: string, userId = 'Not signed in') {
	let time = new Date().toLocaleTimeString();
	console.log(time, message, userId || 'Not signed in');
}

log('User clicked on a button', 'da763be'); // Logs "12:38:31 PM User clicked on a button da763be"
log('User signed out'); // Logs "12:38:31 PM User signed out Not signed in"
