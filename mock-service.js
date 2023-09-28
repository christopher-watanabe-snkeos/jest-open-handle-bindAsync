const grpc = require("@grpc/grpc-js");

function startServer(callback) {
  const testServer = new grpc.Server();
  testServer.bindAsync(
    "127.0.0.1:12345",
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error("Error binding server:", err);
        cancelIdleCallback(err);
        return;
      }
      testServer.start();
      callback(null, testServer);
    }
  );
}

exports.startServer = startServer;
