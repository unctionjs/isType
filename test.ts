/* eslint-disable no-magic-numbers, no-undefined */
import isType from "./index";

test("works", () => {
  expect(isType("null")(null)).toBeTruthy();
});

test("works", () => {
  expect(isType("undefined")(undefined)).toBeTruthy();
});

test("works", () => {
  expect(isType("String")(null)).toBeFalsy();
});

test("works", () => {
  expect(isType("String")(undefined)).toBeFalsy();
});

test("works", () => {
  expect(isType("String")("b")).toBeTruthy();
});

test("works", () => {
  expect(isType("String")("")).toBeTruthy();
});

test("works", () => {
  expect(isType("Object")({})).toBeTruthy();
});

test("works", () => {
  expect(isType("Array")([])).toBeTruthy();
});

test("works", () => {
  expect(isType("Number")(1)).toBeTruthy();
});

test("works", () => {
  expect(isType("Buffer")(new Buffer("x"))).toBeTruthy();
});
