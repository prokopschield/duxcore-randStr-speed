import { performance } from "perf_hooks";

export { default as version_1 } from "./version_1";
export { default as version_2 } from "./version_2";
export { default as version_3 } from "./version_3";

export function testPerformence<T>(
  N: number,
  cb: (...args: T[]) => any,
  ...args: T[]
) {
  const startTime = performance.now();
  for (let i = 0; i < N; ++i) {
    cb.apply(cb, args);
  }
  const endTime = performance.now();
  return endTime - startTime;
}
