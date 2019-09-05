/* eslint-disable no-undefined */
import type from "@unction/type";

export default function isType<A> (signature: string) {
  return function isTypeSignature (value: A): boolean {
    if (signature === "null") {
      return value === null;
    }

    if (signature === "undefined") {
      return value === undefined;
    }

    if (value === undefined || value === null) {
      return false;
    }

    return type(value) === signature;
  };
}
