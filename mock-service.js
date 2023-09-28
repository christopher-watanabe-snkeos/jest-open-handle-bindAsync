const grpc = require("@grpc/grpc-js");

async function startServer() {
  return new Promise((resolve, reject) => {
    const testServer = new grpc.Server();
    testServer.bindAsync(
      "127.0.0.1:12345",
      grpc.ServerCredentials.createInsecure(),
      (err, port) => {
        if (err) {
          console.error("Error binding server:", err);
          reject(err); // Reject the promise if there's an error
          return;
        }
        testServer.start();
        resolve(testServer); // Resolve the promise with the server instance
      }
    );
  });
}

exports.startServer = startServer;
