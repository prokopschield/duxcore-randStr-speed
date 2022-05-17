#!/usr/bin/env node

import { performance } from "perf_hooks";

import { testPerformence, version_1, version_2, version_3 } from ".";

// JIT all versions
for (let i = 0; i < 1000; ++i) {
  version_1(64);
  version_2(64);
  version_3(64);
}

const testAndLog = (iterations: number, length: number) => {
  console.log(`${iterations} iterations, length=${length}`);
  console.log(
    `Version 1: ${testPerformence(iterations, version_1, length)} ms`
  );
  console.log(
    `Version 2: ${testPerformence(iterations, version_2, length)} ms`
  );
  console.log(
    `Version 3: ${testPerformence(iterations, version_3, length)} ms`
  );
  console.log("");
};

testAndLog(100000, 32);

testAndLog(10000, 6400);

testAndLog(1000, 100000);
