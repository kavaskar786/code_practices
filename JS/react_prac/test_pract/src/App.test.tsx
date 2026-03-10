import { test, expect } from "vitest";
import { sum } from "./App.utils";

test("should be 5 for inputs of 3 and 2", () => {
  expect(sum(3, 2)).toBe(5);
});
