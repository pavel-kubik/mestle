import { resolve } from "node:path";
import { readFileSync } from "node:fs";
import { defineConfig, loadEnv, createFilter, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";
import Macros from "unplugin-macros/vite";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    setEnv(mode);
    return {
        plugins: [
            react(),
            Macros(),
            envPlugin(),
            devServerPlugin(),
            sourcemapPlugin(),
            buildPathPlugin(),
            basePlugin(),
            importPrefixPlugin(),
            htmlPlugin(mode),
            svgrPlugin(),
        ],
    };
});
function setEnv(mode) {
    Object.assign(process.env, loadEnv(mode, ".", ["REACT_APP_", "NODE_ENV", "PUBLIC_URL"]));
    process.env.NODE_ENV ||= mode;

    // Strategy: Only use homepage URL for main branch production builds on Netlify
    // All other cases use relative paths (empty PUBLIC_URL)
    if (!process.env.PUBLIC_URL) {
        const { homepage } = JSON.parse(readFileSync("package.json", "utf-8"));

        // Only use homepage for main branch production builds on Netlify
        if (process.env.NETLIFY && process.env.NETLIFY_BRANCH === 'main' && homepage) {
            console.log('[SetEnv] Netlify main branch: using homepage URL for PUBLIC_URL');
            process.env.PUBLIC_URL = homepage
                ? `${homepage.startsWith("http") || homepage.startsWith("/")
                    ? homepage
                    : `/${homepage}`}`.replace(/\/$/, "")
                : "";
        } else {
            // For all other cases (local builds, preview builds, dev), use relative paths
            console.log('[SetEnv] Using relative paths (empty PUBLIC_URL)');
            process.env.PUBLIC_URL = "";
        }
    }
}
// Expose `process.env` environment variables to your client code
// Migration guide: Follow the guide below to replace process.env with import.meta.env in your app, you may also need to rename your environment variable to a name that begins with VITE_ instead of REACT_APP_
// https://vitejs.dev/guide/env-and-mode.html#env-variables
function envPlugin() {
    return {
        name: "env-plugin",
        config(_, { mode }) {
            const env = loadEnv(mode, ".", ["REACT_APP_", "NODE_ENV", "PUBLIC_URL"]);
            return {
                define: Object.fromEntries(Object.entries(env).map(([key, value]) => [
                    `process.env.${key}`,
                    JSON.stringify(value),
                ])),
            };
        },
    };
}
// Setup HOST, SSL, PORT
// Migration guide: Follow the guides below
// https://vitejs.dev/config/server-options.html#server-host
// https://vitejs.dev/config/server-options.html#server-https
// https://vitejs.dev/config/server-options.html#server-port
function devServerPlugin() {
    return {
        name: "dev-server-plugin",
        config(_, { mode }) {
            const { HOST, PORT, HTTPS, SSL_CRT_FILE, SSL_KEY_FILE } = loadEnv(mode, ".", ["HOST", "PORT", "HTTPS", "SSL_CRT_FILE", "SSL_KEY_FILE"]);
            const https = HTTPS === "true";
            return {
                server: {
                    host: HOST || "0.0.0.0",
                    port: parseInt(PORT || "3000", 10),
                    open: true,
                    ...(https &&
                        SSL_CRT_FILE &&
                        SSL_KEY_FILE && {
                        https: {
                            cert: readFileSync(resolve(SSL_CRT_FILE)),
                            key: readFileSync(resolve(SSL_KEY_FILE)),
                        },
                    }),
                },
            };
        },
    };
}
// Migration guide: Follow the guide below
// https://vitejs.dev/config/build-options.html#build-sourcemap
function sourcemapPlugin() {
    return {
        name: "sourcemap-plugin",
        config(_, { mode }) {
            const { GENERATE_SOURCEMAP } = loadEnv(mode, ".", [
                "GENERATE_SOURCEMAP",
            ]);
            return {
                build: {
                    sourcemap: GENERATE_SOURCEMAP === "true",
                },
            };
        },
    };
}
// Migration guide: Follow the guide below
// https://vitejs.dev/config/build-options.html#build-outdir
function buildPathPlugin() {
    return {
        name: "build-path-plugin",
        config(_, { mode }) {
            const { BUILD_PATH } = loadEnv(mode, ".", [
                "BUILD_PATH",
            ]);
            return {
                build: {
                    outDir: BUILD_PATH || "build",
                    rollupOptions: {
                        output: {
                            manualChunks: {
                                vendor: ['react', 'react-dom'],
                                router: ['react-router-dom'],
                                ui: ['@tippyjs/react', 'react-spinners'],
                                utils: ['geolib', 'luxon']
                            }
                        }
                    },
                    chunkSizeWarningLimit: 600
                },
            };
        },
    };
}
// Migration guide: Follow the guide below and remove homepage field in package.json
// https://vitejs.dev/config/shared-options.html#base
function basePlugin() {
    return {
        name: "base-plugin",
        config(_, { mode }) {
            // Strategy: Use relative paths by default, only use absolute URLs for main production

            // 1. For Netlify preview/branch deployments, use relative paths
            if (process.env.NETLIFY && process.env.NETLIFY_BRANCH && process.env.NETLIFY_BRANCH !== 'main') {
                console.log(`[Vite Config] Netlify preview/branch build (${process.env.NETLIFY_BRANCH}): using relative paths`);
                return { base: "./" };
            }

            // 2. For local development, always use relative paths
            if (mode === 'development') {
                console.log('[Vite Config] Development mode: using relative paths');
                return { base: "./" };
            }

            // 3. For production builds (main branch on Netlify or local production builds)
            const { PUBLIC_URL } = loadEnv(mode, ".", ["PUBLIC_URL"]);

            // Only use absolute URL if we're on main branch AND have PUBLIC_URL set
            if (process.env.NETLIFY && process.env.NETLIFY_BRANCH === 'main' && PUBLIC_URL) {
                console.log('[Vite Config] Netlify main branch production build: using homepage URL');
                return { base: PUBLIC_URL };
            }

            // 4. Default: use relative paths (safest option for all other cases)
            console.log('[Vite Config] Default: using relative paths');
            return { base: "./" };
        },
    };
}
// To resolve modules from node_modules, you can prefix paths with ~
// https://create-react-app.dev/docs/adding-a-sass-stylesheet
// Migration guide: Follow the guide below
// https://vitejs.dev/config/shared-options.html#resolve-alias
function importPrefixPlugin() {
    return {
        name: "import-prefix-plugin",
        config() {
            return {
                resolve: {
                    alias: [{ find: /^~([^/])/, replacement: "$1" }],
                },
            };
        },
    };
}
// In Create React App, SVGs can be imported directly as React components. This is achieved by svgr libraries.
// https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs
function svgrPlugin() {
    const filter = createFilter("**/*.svg");
    const postfixRE = /[?#].*$/s;
    return {
        name: "svgr-plugin",
        async transform(code, id) {
            if (filter(id)) {
                const { transform } = await import("@svgr/core");
                const { default: jsx } = await import("@svgr/plugin-jsx");
                const filePath = id.replace(postfixRE, "");
                const svgCode = readFileSync(filePath, "utf8");
                const componentCode = await transform(svgCode, undefined, {
                    filePath,
                    caller: {
                        previousExport: code,
                        defaultPlugins: [jsx],
                    },
                });
                const res = await transformWithEsbuild(componentCode, id, {
                    loader: "jsx",
                });
                return {
                    code: res.code,
                    map: null,
                };
            }
        },
    };
}
// Replace %ENV_VARIABLES% in index.html
// https://vitejs.dev/guide/api-plugin.html#transformindexhtml
// Migration guide: Follow the guide below, you may need to rename your environment variable to a name that begins with VITE_ instead of REACT_APP_
// https://vitejs.dev/guide/env-and-mode.html#html-env-replacement
function htmlPlugin(mode) {
    const env = loadEnv(mode, ".", ["REACT_APP_", "NODE_ENV", "PUBLIC_URL"]);
    return {
        name: "html-plugin",
        transformIndexHtml: {
            order: "pre",
            handler(html) {
                return html.replace(/%(.*?)%/g, (match, p1) => {
                    // For development and when PUBLIC_URL is not set, use empty string
                    if (p1 === 'PUBLIC_URL') {
                        // In dev mode or when PUBLIC_URL is empty, return empty string
                        const publicUrl = env[p1] || process.env.PUBLIC_URL || '';
                        return publicUrl;
                    }
                    return env[p1] ?? match;
                });
            },
        },
    };
}
