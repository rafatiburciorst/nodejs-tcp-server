# TCP Application

This is a simple TCP client-server application built with Node.js and TypeScript. The server listens for commands from the client and responds accordingly.

## Project Structure
.gitignore .vscode/ settings.json package.json pnpm-lock.yaml src/ tcp/ client-tcp.ts server-tcp.ts tsconfig.json


## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies:
    ```sh
    pnpm install
    ```

## Usage

### Start the Server

To start the TCP server, run the following command:

```sh
pnpm run start:server
pnpm run start:client
```