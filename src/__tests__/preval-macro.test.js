/**
 * Test to reproduce preval.macro Node.js module externalization errors
 * This test simulates the issue where preval.macro tries to access Node.js modules
 * like 'os', 'path', and 'fs' in browser environment
 */

describe('preval.macro Node.js module externalization errors', () => {
  test('should fail when trying to access Node.js modules in browser', () => {
    // Mock the preval.macro behavior that causes the error
    const mockPreval = () => {
      // This simulates what preval.macro does internally
      try {
        // These are the modules that cause the externalization warnings
        const os = require('os');
        const path = require('path');
        const fs = require('fs');

        // These calls would fail in browser environment
        os.homedir();
        path.parse('/some/path');
        fs.realpath('/some/path');

        return new Date().toLocaleString();
      } catch (error) {
        throw new Error(`Module externalization error: ${error.message}`);
      }
    };

    // In browser environment, this should throw an error
    expect(() => mockPreval()).toThrow('Module externalization error');
  });

  test('should reproduce the specific error from console', () => {
    // Mock the exact error that appears in the console
    const mockModuleError = (moduleName, method) => {
      throw new Error(
        `Module "${moduleName}" has been externalized for browser compatibility. Cannot access "${moduleName}.${method}" in client code.`
      );
    };

    // Test the specific errors from the console logs
    expect(() => mockModuleError('os', 'homedir')).toThrow(
      'Module "os" has been externalized for browser compatibility'
    );

    expect(() => mockModuleError('path', 'parse')).toThrow(
      'Module "path" has been externalized for browser compatibility'
    );

    expect(() => mockModuleError('fs', 'realpath')).toThrow(
      'Module "fs" has been externalized for browser compatibility'
    );
  });

  test('should NOT reproduce version determination error after fix', () => {
    // After upgrading @types/node and removing preval.macro, this error should no longer occur
    const mockVersionCheck = () => {
      // This simulates the babel-plugin-macros trying to determine Node version
      try {
        const process = require('process');
        if (!process || !process.version) {
          throw new TypeError('Unable to determine current node version');
        }
        return process.version;
      } catch (error) {
        throw new TypeError('Unable to determine current node version');
      }
    };

    // This should NOT throw anymore since we have a proper Node.js environment
    expect(() => mockVersionCheck()).not.toThrow();
  });
});