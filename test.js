const assert = require("assert");
const { startServer } = require("./mock-service.js");

describe("Jest tests", () => {
  let server;
  beforeAll(async () => {
    server = await startServer();
  });

  afterAll(() => {
    server.forceShutdown();
  });

  it("Assert true", () => {
    assert(true);
  });
});
