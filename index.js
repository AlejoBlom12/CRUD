const server = require("./src/config/serve");
require("./src/config/databases");

server.listen(server.get("port"), () => {
  console.log("Server run in port");
});
