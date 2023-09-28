const assert = require("assert");
const { startServer } = require("./mock-service.js");

describe("Jest tests", () => {
  let server;
  beforeAll((done) => {
    // eslint-disable-next-line consistent-return
    startServer((err, srv) => {
      if (err) return done(err);
      server = srv;
      done();
    });
  });

  afterAll((done) => {
    server.forceShutdown();
    done();
  });

  it("Assert true", () => {
    assert(true);
  });
});
