import http from "http";
import { HOST_APP, PORT_APP } from "./config/config";
import {requestListener}  from "./app";

const server = http.createServer(requestListener);

server.listen(PORT_APP, () => {
    console.log(`Server is running on http://${HOST_APP}:${PORT_APP}`);
}); 