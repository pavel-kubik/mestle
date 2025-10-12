import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import { loadEnv, createFilter, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';
import Macros from 'unplugin-macros/vite';

// Vite plugin functions from main config
function envPlugin() {
  return {
    name: 'env-plugin',
    config(_, { mode }) {
      const env = loadEnv(mode, '.', ['REACT_APP_', 'NODE_ENV', 'PUBLIC_URL']);
      return {
        define: Object.fromEntries(Object.entries(env).map(([key, value]) => [`process.env.${key}`, JSON.stringify(value)]))
      };
    }
  };
}

function devServerPlugin() {
  return {
    name: 'dev-server-plugin',
    config(_, { mode }) {
      const { HOST, PORT, HTTPS, SSL_CRT_FILE, SSL_KEY_FILE } = loadEnv(mode, '.', [
        'HOST',
        'PORT',
        'HTTPS',
        'SSL_CRT_FILE',
        'SSL_KEY_FILE'
      ]);
      const https = HTTPS === 'true';
      return {
        server: {
          host: HOST || '0.0.0.0',
          port: parseInt(PORT || '3000', 10),
          open: true,
          ...(https &&
            SSL_CRT_FILE &&
            SSL_KEY_FILE && {
              https: {
                cert: readFileSync(resolve(SSL_CRT_FILE)),
                key: readFileSync(resolve(SSL_KEY_FILE))
              }
            })
        }
      };
    }
  };
}

function importPrefixPlugin() {
  return {
    name: 'import-prefix-plugin',
    config() {
      return {
        resolve: {
          alias: [{ find: /^~([^/])/, replacement: '$1' }]
        }
      };
    }
  };
}

function svgrPlugin() {
  const filter = createFilter('**/*.svg');
  const postfixRE = /[?#].*$/s;
  return {
    name: 'svgr-plugin',
    async transform(code, id) {
      if (filter(id)) {
        const { transform } = await import('@svgr/core');
        const { default: jsx } = await import('@svgr/plugin-jsx');
        const filePath = id.replace(postfixRE, '');
        const svgCode = readFileSync(filePath, 'utf8');
        const componentCode = await transform(svgCode, undefined, {
          filePath,
          caller: {
            previousExport: code,
            defaultPlugins: [jsx]
          }
        });
        const res = await transformWithEsbuild(componentCode, id, {
          loader: 'jsx'
        });
        return {
          code: res.code,
          map: null
        };
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), Macros(), envPlugin(), devServerPlugin(), importPrefixPlugin(), svgrPlugin()],

  test: {
    // Test Organization Strategy (2025 Best Practices):
    // - Co-locate tests with utilities and domain logic (src/Util/*.test.jsx, src/Rand/*.test.jsx)
    // - Use __tests__/ directory for integration and cross-cutting tests
    // - Consistent .test.jsx/.test.js naming convention

    // Enable Jest-compatible globals (describe, it, expect, etc.)
    globals: true,

    // Use jsdom for DOM testing (React components)
    environment: 'jsdom',

    // Setup files to run before tests
    setupFiles: ['./src/setupTests.js'],

    // Test file patterns
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}', 'src/**/__tests__/**/*.{js,jsx,ts,tsx}'],

    // Explicitly exclude node_modules to prevent running third-party tests
    exclude: ['node_modules/**', 'build/**', 'coverage/**', 'dist/**'],

    // Coverage configuration
    coverage: {
      provider: 'v8', // Modern V8 coverage (faster than c8)
      reporter: ['text', 'json', 'html', 'lcov'],

      // Coverage thresholds
      thresholds: {
        global: {
          statements: 85,
          branches: 80,
          functions: 90,
          lines: 85
        }
      },

      // Include/exclude patterns
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: [
        'src/**/*.{test,spec}.{js,jsx,ts,tsx}',
        'src/**/__tests__/**',
        'src/setupTests.js',
        'src/reportWebVitals.js',
        'src/index.jsx',
        'src/macros.js', // Build-time macro file
        'node_modules/**'
      ]
    },

    // Test timeout settings
    testTimeout: 10000,
    hookTimeout: 10000,

    // Watch mode settings
    watch: {
      // Ignore files that shouldn't trigger test re-runs
      ignored: ['**/node_modules/**', '**/build/**', '**/coverage/**']
    },

    // Mock settings
    clearMocks: true,
    restoreMocks: true,

    // Performance settings
    pool: 'threads', // Use worker threads for parallel testing
    poolOptions: {
      threads: {
        singleThread: false,
        useAtomics: true
      }
    }
  },

  // Define test-specific aliases if needed
  define: {
    // Add any test-specific global definitions
    'import.meta.vitest': 'undefined'
  },

  // Resolve configuration
  resolve: {
    alias: [{ find: /^~([^/])/, replacement: '$1' }]
  }
});
