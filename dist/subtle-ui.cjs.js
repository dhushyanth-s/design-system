"use strict";
function e(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports[Symbol.toStringTag] = "Module");
var t = e(require("react"));
exports.ExampleButton = function () {
  return t.default.createElement("button", null, "Hello world");
};
