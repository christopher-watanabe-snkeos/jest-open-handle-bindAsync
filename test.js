const assert = require("assert");
const mockService = require("./mock-service.js");

let mockServer;

beforeAll(() => {
  mockServer = mockService.startServer();
});

afterAll(() => {
  mockServer.forceShutdown(() => {});
});

describe("Jest tests", () => {
  it("Assert true", () => {
    assert(true);
  });
});
