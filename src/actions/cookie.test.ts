import { afterEach, describe, expect, test, vi } from "vitest";
import { get, has, set } from "./cookie";

describe("cookies", () => {
  const mocks = vi.hoisted(() => ({
    get: vi.fn(),
    has: vi.fn(),
    set: vi.fn(),
  }));

  vi.mock("next/headers", () => ({
    cookies() {
      return mocks;
    },
  }));

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should return value when it exists", async () => {
    mocks.get.mockReturnValue({
      value: "overwrited mocked value on test 1",
    });
    mocks.has.mockReturnValue(true);

    const actual = await get();
    expect(actual).toBe("overwrited mocked value on test 1");
  });

  test("should return default value when no cookie is set", async () => {
    mocks.get.mockReturnValue(undefined);
    mocks.has.mockReturnValue(false);

    const actual = await get();
    expect(actual).toBe("default value");
  });

  test("should set value in cookie", async () => {
    mocks.set.mockImplementation(() => {});

    await set(new FormData());

    expect(mocks.set).toHaveBeenCalledOnce();
  });

  test("should check if cookie exists", async () => {
    mocks.has.mockReturnValue(true);

    const actual = has();
    expect(mocks.has).toHaveBeenCalledOnce();
    expect(actual).toBeTruthy();
  });
});
