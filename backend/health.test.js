import request from "supertest";
import { describe, test, expect } from "vitest";
import app from "./src/index.js";

describe("Health API", () => {

  test("GET /api/health should return 200", async () => {

    const response = await request(app)
      .get("/api/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Backend is working");

  });

});