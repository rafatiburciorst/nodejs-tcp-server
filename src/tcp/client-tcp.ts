import net from "node:net";

const PORT = 5001;
const HOST = "localhost";
const RECONNECT_INTERVAL = 5000;

// let client
function connectAndSendCommand(command: string) {
	const client = new net.Socket();

	client.connect(PORT, HOST, () => {
		client.write(command);
	});

	client.on("data", (data) => {
		console.log(data.toString());
		client.end();
	});

	client.on("error", (err) => {
		console.error("Erro no cliente:", err.message);
		if (err.code === "ECONNREFUSED" || err.code === "ECONNRESET") {
			console.log("Tentando reconectar...");
			attemptReconnection(command);
		}
	});

	client.on("close", () => {
		console.log("Conexão fechada.");
		attemptReconnection(command);
	});
}

function attemptReconnection(command: string) {
	setTimeout(() => {
		console.log("Tentando reconectar ao servidor...");
		connectAndSendCommand(command);
	}, RECONNECT_INTERVAL);
}

connectAndSendCommand("START");
connectAndSendCommand("STOP");
connectAndSendCommand("STATUS");
