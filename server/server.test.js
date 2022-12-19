const request = require("supertest");
const server = require("./server");

describe("Test the fetch API", () => {
	it("It should fetch flickr API", () => {
		request(server)
			.get("/api")
			.then((response) => {
				expect(response.statusCode).toBe(200);
				expect(response.json).toHaveProperty("title");
			});
	});
});
