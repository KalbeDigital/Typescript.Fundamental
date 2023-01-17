function log(message: string, userId?: string) {
	let time = new Date().toLocaleTimeString();
	console.log(time, message, userId || 'Not signed in');
}

log('Page loaded'); // Logs "12:38:31 PM Page loaded Not signed in"
log('User signed in', 'da763be'); // Logs "12:38:31 PM User signed in da763be"
