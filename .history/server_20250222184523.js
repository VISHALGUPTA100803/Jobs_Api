const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("jobs.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");


server.use(middlewares);
server.use(router);
server.use(cors());

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
