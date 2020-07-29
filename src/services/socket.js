import {PORT, URL} from "../../config";
import socketIOClient from "socket.io-client";
import {toast} from "react-toastify";

export const socket = socketIOClient(`${URL}:${PORT}`);

export const receivedSocketMessages = () => {
    socket.on('broadcastReceivedMessage', (data) => {
        return toast("🦄 " + data.msg);
    });
};
