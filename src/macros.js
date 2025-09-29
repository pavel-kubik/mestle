// Macros for build-time code generation
// These functions run at build time and their return values are inlined

export function buildTime() {
  return new Date().toLocaleString();
}
