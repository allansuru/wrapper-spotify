"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toJSON = void 0;

// eslint-disable-next-line import/prefer-default-export
var toJSON = function toJSON(data) {
  return data.json();
};

exports.toJSON = toJSON;