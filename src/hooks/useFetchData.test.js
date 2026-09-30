import {
  describe, expect, it, vi,
} from "vitest";
import { renderHook, waitFor } from "@testing-library/react";

import { useFetchData } from "./useFetchData";

const respondWith = (body) => vi.fn(() => Promise.resolve({ json: () => Promise.resolve(body) }));

describe("useFetchData", () => {
  it("is loading before the response arrives", () => {
    vi.stubGlobal("fetch", vi.fn(() => new Promise(() => {})));

    const { result } = renderHook(() => useFetchData("/message.json"));

    expect(result.current).toEqual({ data: null, loading: true, error: null });
  });

  it("returns the parsed body of the response", async () => {
    const fetch = respondWith({ date: "2026-09-30", notice: "<b>Hi</b>" });
    vi.stubGlobal("fetch", fetch);

    const { result } = renderHook(() => useFetchData("/message.json"));

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(fetch).toHaveBeenCalledWith("/message.json");
    expect(result.current).toEqual({ data: { date: "2026-09-30", notice: "<b>Hi</b>" }, loading: false, error: null });
  });

  it.each([
    ["the request fails", () => Promise.reject(new TypeError("Failed to fetch"))],
    ["the body is not JSON", () => Promise.resolve({ json: () => Promise.reject(new SyntaxError("Unexpected token")) })],
  ])("reports the error and stops loading when %s", async (_label, impl) => {
    vi.stubGlobal("fetch", vi.fn(impl));

    const { result } = renderHook(() => useFetchData("/message.json"));

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeInstanceOf(Error);
  });
});
