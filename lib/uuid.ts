/**
 * Generates a UUIDv7 (time-ordered UUID).
 * UUIDv7 consists of:
 * - 48 bits: Unix timestamp (ms)
 * - 4 bits: Version (7)
 * - 12 bits: Random data (or sequence)
 * - 2 bits: Variant (10)
 * - 62 bits: Random data
 */
export function uuidv7(): string {
  const now = Date.now();
  const bytes = new Uint8Array(16);

  // Fill everything with random bytes first for the non-timestamp parts
  crypto.getRandomValues(bytes);

  // 48-bit timestamp (Big Endian)
  // We use division and modulo to avoid 32-bit integer overflow in JS
  bytes[0] = (now / 0x10000000000) & 0xff;
  bytes[1] = (now / 0x100000000) & 0xff;
  bytes[2] = (now / 0x1000000) & 0xff;
  bytes[3] = (now / 0x10000) & 0xff;
  bytes[4] = (now / 0x100) & 0xff;
  bytes[5] = now & 0xff;

  // Version 7: set bits 4-7 of byte 6 to 0111
  bytes[6] = (bytes[6] & 0x0f) | 0x70;

  // Variant 1: set bits 6-7 of byte 8 to 10
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  // Helper to convert byte to hex
  const toHex = (b: number) => b.toString(16).padStart(2, '0');

  return (
    toHex(bytes[0]) + toHex(bytes[1]) + toHex(bytes[2]) + toHex(bytes[3]) + "-" +
    toHex(bytes[4]) + toHex(bytes[5]) + "-" +
    toHex(bytes[6]) + toHex(bytes[7]) + "-" +
    toHex(bytes[8]) + toHex(bytes[9]) + "-" +
    toHex(bytes[10]) + toHex(bytes[11]) + toHex(bytes[12]) + toHex(bytes[13]) + toHex(bytes[14]) + toHex(bytes[15])
  );
}
