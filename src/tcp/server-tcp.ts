import net from "node:net";

function startAction() {
	return "Ação START executada!";
}

function stopAction() {
	return "Ação STOP executada!";
}

function statusAction() {
	return "Status atual: OK!";
}

const commandMap: Record<string, () => string> = {
	START: startAction,
	STOP: stopAction,
	STATUS: statusAction,
};

const server = net.createServer((socket) => {
	console.log("Client connected");

	socket.on("data", (data) => {
		const command = data.toString().trim();
		const response = commandMap[command]
			? commandMap[command]()
			: "Command unknown";
		socket.write(`${response}\n`);
	});

	socket.on("end", () => {
		console.log("Client disconnected");
	});

	socket.on("error", (err) => {
		console.error(err);
	});
});

const PORT = 5001;

server.listen(PORT, () => {
	console.log(`TCP server is running at ${PORT}`);
});
