type Context = {
	appId?: string;
	userId?: string;
};

function log(message: string, context: Context = {}) {
	let time = new Date().toISOString();
	console.log(time, message, context.userId);
}

log('Hello World', { appId: '1', userId: '1' }); // Logs 2023-01-16T08:07:58.445Z Hello World 1
