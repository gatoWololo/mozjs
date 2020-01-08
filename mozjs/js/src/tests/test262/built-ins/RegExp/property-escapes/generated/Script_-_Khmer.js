// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Khmer`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x001780, 0x0017DD],
    [0x0017E0, 0x0017E9],
    [0x0017F0, 0x0017F9],
    [0x0019E0, 0x0019FF]
  ]
});
testPropertyEscapes(
  /^\p{Script=Khmer}+$/u,
  matchSymbols,
  "\\p{Script=Khmer}"
);
testPropertyEscapes(
  /^\p{Script=Khmr}+$/u,
  matchSymbols,
  "\\p{Script=Khmr}"
);
testPropertyEscapes(
  /^\p{sc=Khmer}+$/u,
  matchSymbols,
  "\\p{sc=Khmer}"
);
testPropertyEscapes(
  /^\p{sc=Khmr}+$/u,
  matchSymbols,
  "\\p{sc=Khmr}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00177F],
    [0x0017DE, 0x0017DF],
    [0x0017EA, 0x0017EF],
    [0x0017FA, 0x0019DF],
    [0x001A00, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Khmer}+$/u,
  nonMatchSymbols,
  "\\P{Script=Khmer}"
);
testPropertyEscapes(
  /^\P{Script=Khmr}+$/u,
  nonMatchSymbols,
  "\\P{Script=Khmr}"
);
testPropertyEscapes(
  /^\P{sc=Khmer}+$/u,
  nonMatchSymbols,
  "\\P{sc=Khmer}"
);
testPropertyEscapes(
  /^\P{sc=Khmr}+$/u,
  nonMatchSymbols,
  "\\P{sc=Khmr}"
);

reportCompare(0, 0);
