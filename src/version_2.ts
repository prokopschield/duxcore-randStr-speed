const chars = Buffer.from(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
);

const numberChars = chars.length;

/**
 * randStr - generate a random string of a given length
 * @param {number} length
 * @returns {string}
 */
export default function randString(length: number): string {
  const result = Buffer.alloc(length);

  for (let index = 0; index < length; ++index) {
    result[index] = chars[Math.floor(numberChars * Math.random())];
  }

  return String(result);
}
