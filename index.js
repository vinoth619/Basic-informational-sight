
const http = require("http");
const Routess=require("./Routes")
const server=http.createServer(Routess.handle)
server.listen(8080, ()=> console.log("Server Running on port 8080"));