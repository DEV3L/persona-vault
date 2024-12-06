import { expect, test } from "@jest/globals";
import { getVisibleIndices } from "./carouselUtils";

test("getVisibleIndices returns correct indices for middle index", () => {
  const indices = getVisibleIndices(1, 5);
  expect(indices).toEqual([0, 1, 2]);
});

test("getVisibleIndices wraps around correctly at the start", () => {
  const indices = getVisibleIndices(0, 5);
  expect(indices).toEqual([4, 0, 1]);
});

test("getVisibleIndices wraps around correctly at the end", () => {
  const indices = getVisibleIndices(4, 5);
  expect(indices).toEqual([3, 4, 0]);
});

test("getVisibleIndices throws error for less than 3 cards", () => {
  expect(() => getVisibleIndices(0, 2)).toThrow(
    "There must be at least 3 cards to display a carousel."
  );
});
