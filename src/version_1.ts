export default function randString(length: number): string {
  const result: string[] = [];
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charsLength = chars.length;

  for (let index = 0; index < length; index++) {
    result.push(chars.charAt(Math.floor(Math.random() * charsLength)));
  }

  return result.join("");
}
