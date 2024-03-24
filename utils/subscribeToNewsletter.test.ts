import { subscribeToNewsletter } from "./subscribeToNewsletter";

global.fetch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe("subscribeToNewsletter", () => {
  it("should return success status and data when the request is successful", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest
        .fn()
        .mockResolvedValueOnce({ message: "Subscribed successfully" }),
    });

    const result = await subscribeToNewsletter("test@example.com");

    expect(result).toEqual({
      status: "success",
      data: { message: "Subscribed successfully" },
    });
    expect(global.fetch).toHaveBeenCalledWith("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "test@example.com" }),
    });
  });

  it("should return error status and message when the request fails due to network or server error", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: jest.fn().mockResolvedValueOnce({ error: "Internal server error" }),
    });

    const result = await subscribeToNewsletter("test@example.com");

    expect(result).toEqual({
      status: "error",
      message: "Internal server error",
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
