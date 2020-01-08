// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string.prototype.match
description: The "this" value must be object-coercible
info: |
  1. Let O be ? RequireObjectCoercible(this value).
---*/

var match = String.prototype.match;

assert.sameValue(typeof match, 'function');

assert.throws(TypeError, function() {
  match.call(undefined, /./);
}, 'undefined');

assert.throws(TypeError, function() {
  match.call(null, /./);
}, 'null');

reportCompare(0, 0);
