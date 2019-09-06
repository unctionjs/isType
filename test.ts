/* eslint-disable no-magic-numbers, no-undefined */
import isType from "./index.ts";

test(() => {
  expect(isType("null")(null)).toBeTruthy();
});

test(() => {
  expect(isType("undefined")(undefined)).toBeTruthy();
});

test(() => {
  expect(isType("String")(null)).toBeFalsy();
});

test(() => {
  expect(isType("String")(undefined)).toBeFalsy();
});

test(() => {
  expect(isType("String")("b")).toBeTruthy();
});

test(() => {
  expect(isType("String")("")).toBeTruthy();
});

test(() => {
  expect(isType("Object")({})).toBeTruthy();
});

test(() => {
  expect(isType("Array")([])).toBeTruthy();
});

test(() => {
  expect(isType("Number")(1)).toBeTruthy();
});

test(() => {
  expect(isType("Buffer")(new Buffer("x"))).toBeTruthy();
});
