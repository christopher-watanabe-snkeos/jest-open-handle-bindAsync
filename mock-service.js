const grpc = require("@grpc/grpc-js");

function startServer() {
  const testServer = new grpc.Server();
  testServer.bindAsync(
    "127.0.0.1:12345",
    grpc.ServerCredentials.createInsecure(),
    () => {
      testServer.start();
    }
  );

  return testServer;
}

exports.startServer = startServer;
