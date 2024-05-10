// const socketManager = require('../managers/socketManager');
const stateManager = require('./managers/stateManager');
const { setRemoteSubshash } = require('./managers/stateManager');
const wasmManager = require('./managers/wasmManager');
const { splitAtFirstSpace } = require('./utils/helpers');
const rn_bridge = require("rn-bridge");

module.exports = function (liveSocket) {
    // let socket = socketManager.getIO();
    liveSocket.on('open', () => {
        console.log("Connected to the live socket");
    });

    liveSocket.on('error', (error) => {
        console.error(`WebSocket error: ${error}`);
    });

    liveSocket.onmessage = (event) => {
        console.log(`Socket recieved1: ${event.data}`);
        try {
            let flag, data;
            if (event.data.startsWith('#')) {
                [flag, data] = splitAtFirstSpace(event.data);
            } else {
                data = JSON.parse(event.data);
            }
            if (data.subshash) {
                setRemoteSubshash(data.subshash);
            }
            if (data.wasm == 1) {
                console.log(`Socket recieved: Wasm call - wss ${JSON.stringify(data)}`);
                wasmManager.ccall({ command: `wss ${JSON.stringify(data)}`, flag: 'wss' });
            }
            if (flag) {
                stateManager.updateSocketState(flag.slice(1), data);
            }
            // socket.emit('live', data);
            rn_bridge.channel.send(
                JSON.stringify({
                  action: "S2C/live",
                  data
                })
              );
        } catch (error) {

        }
    };

    liveSocket.on('close', () => {
        console.log("Disconnected from the server");
    });
}
