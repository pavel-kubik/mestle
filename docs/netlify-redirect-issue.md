# Netlify Redirect Configuration Issue

## Problem Description

When deploying the app with new language/country routing (`/{language}/{country}/path`), the Netlify deployment preview fails with MIME type errors:

```
Failed to load module script: Expected a JavaScript-or-Wasm module script
but the server responded with a MIME type of "text/html".
Strict MIME type checking is enforced for module scripts per HTML spec.
```

**Affected files:**
- `utils-DDOxqTla.js`
- `router-DuMrLjP6.js`
- `index-BeLmatXo.js`
- `vendor-Dcsd2E38.js`
- `manifest.json`

**Deployment URL:** https://deploy-preview-77--lustrous-puffpuff-c8e9da.netlify.app/

## Root Cause

The SPA redirect rule in `netlify.toml` is catching ALL requests, including static assets:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**What happens:**
1. Browser requests: `GET /assets/index-BeLmatXo.js`
2. Netlify redirect catches it: `/*` matches everything
3. Returns: `index.html` with MIME type `text/html`
4. Browser expects `application/javascript` → **Error!**

## Failed Approach #1: Using `conditions` Parameter

### Configuration
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  force = false
  conditions = {path = "!/*.{js,css,svg,png,jpg,jpeg,gif,ico,woff,woff2,ttf,eot,json,xml,txt}"}
```

### Result: **404 on SPA Routes**

**Symptoms:**
- Root URL (`/`) loads correctly
- SPA routes like `/cs/czechia` return 404 Not Found
- Static assets would theoretically load correctly (not tested due to 404s)

**Why it failed:**
- The `conditions` syntax appears to be incompatible with Netlify's TOML configuration
- Possible syntax error in the conditions format
- Or the condition is too restrictive and blocks legitimate SPA routes

**Commit:** `6dc0696`

## Failed Approach #2: Using Only `force = false`

### Configuration
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  force = false
```

### Result: **MIME Type Errors Return**

**Symptoms:**
- Same MIME type errors as original problem
- JavaScript files served as HTML
- App fails to load

**Why it failed:**
- `force = false` alone is insufficient to prevent the redirect
- Netlify might still redirect to `index.html` for paths that don't exist
- The build output structure might not match expected paths
- Asset paths might be getting rewritten or not properly recognized

**Commit:** `e67edc9`

## Technical Details

### Vite Build Configuration

From `vite.config.js`:

```javascript
// Base path configuration
function basePlugin() {
  return {
    name: 'base-plugin',
    config(_, { mode }) {
      const { PUBLIC_URL } = loadEnv(mode, '.', ['PUBLIC_URL']);

      // For Netlify deployments (preview, branch, etc.), use relative paths
      if (process.env.NETLIFY && process.env.NETLIFY_BRANCH !== 'main') {
        return { base: './' };
      }

      // For main production build
      return { base: '/' };
    }
  };
}
```

**Key points:**
- Preview deployments use `base: './'` (relative paths)
- Main production uses `base: '/'` (absolute paths)
- This affects how assets are referenced

### Asset Chunking

```javascript
manualChunks: {
  vendor: ['react', 'react-dom'],
  router: ['react-router-dom'],
  ui: ['@tippyjs/react', 'react-spinners'],
  utils: ['geolib', 'luxon']
}
```

Assets are split into multiple chunks, all of which need proper MIME types.

### URL Structure

**Old routing:** `/`, `/user`, `/leader-board`, `/help`
**New routing:** `/{lang}/{country}/`, `/{lang}/{country}/user`, etc.

Examples:
- `/cs/czechia/`
- `/en/germany/user`
- `/de/germany/leader-board`

The increased path depth may affect how Netlify processes redirects.

## Comparison: What Works in Development

In local development (Vite dev server), the configuration works perfectly:

```javascript
// vite.config.js
server: {
  host: HOST || '0.0.0.0',
  port: parseInt(PORT || '3000', 10),
  open: true
}
```

Vite handles SPA routing internally without explicit redirect rules.

## Theories for Investigation

### Theory 1: Asset Path Resolution
- Preview deployments use relative paths (`base: './'`)
- Assets might be at `/assets/file.js` but requested from `/cs/czechia/`
- Relative path would resolve to `/cs/czechia/assets/file.js` (wrong)
- Solution: Use absolute paths for all Netlify deployments?

### Theory 2: Build Output Structure
- Check what's actually in the `build/` directory
- Verify asset paths in built `index.html`
- Ensure assets are actually at expected locations

### Theory 3: Netlify Redirect Priority
- Multiple redirect rules might be needed
- Static assets should be explicitly excluded BEFORE the catch-all
- Order matters in `netlify.toml`

### Theory 4: Missing _redirects File
- Some projects use `public/_redirects` instead of `netlify.toml`
- Different syntax and behavior
- Might work better with Vite builds

## Potential Solutions to Try

### Option A: Explicit Asset Rules First
```toml
# Serve static assets directly (higher priority)
[[redirects]]
  from = "/assets/*"
  to = "/assets/:splat"
  status = 200

[[redirects]]
  from = "/*.js"
  to = "/:splat.js"
  status = 200

[[redirects]]
  from = "/*.css"
  to = "/:splat.css"
  status = 200

# Then SPA fallback
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option B: Use _redirects File
Create `public/_redirects`:
```
/assets/*  /assets/:splat  200
/*.js      /:splat.js      200
/*.css     /:splat.css     200
/*         /index.html     200
```

### Option C: Fix Base Path
Change Vite config to always use absolute paths:
```javascript
// For ALL Netlify deployments
if (process.env.NETLIFY) {
  return { base: '/' };
}
```

### Option D: Netlify Headers
Add explicit MIME type headers:
```toml
[[headers]]
  for = "/*.js"
  [headers.values]
    Content-Type = "application/javascript"

[[headers]]
  for = "/*.css"
  [headers.values]
    Content-Type = "text/css"
```

### Option E: Check Build Output
Verify the actual build:
```bash
npm run build
ls -la build/
cat build/index.html | grep -A5 "script"
```

## Debug Steps

1. **Inspect Build Output**
   - Check `build/` directory structure
   - Verify asset paths in `build/index.html`
   - Ensure files exist where expected

2. **Test Locally**
   - Serve the `build/` folder with a static server
   - Simulate the redirect behavior
   - Verify all assets load

3. **Check Netlify Logs**
   - Review deployment logs
   - Check for file serving errors
   - Verify redirect behavior

4. **Inspect Network Tab**
   - Check actual URLs being requested
   - Verify response Content-Type headers
   - Check for 404s vs incorrect MIME types

## Status

**Current State:** Both approaches failed
- Approach #1 (conditions): 404s on SPA routes
- Approach #2 (force=false only): MIME type errors

**Next Steps:**
1. Investigate build output structure
2. Test one of the potential solutions above
3. Consider using `_redirects` file instead of `netlify.toml`
4. Verify base path configuration for Netlify deployments

## References

- [Netlify Redirects Documentation](https://docs.netlify.com/routing/redirects/)
- [Netlify SPA Redirect Guide](https://docs.netlify.com/routing/redirects/redirect-options/#history-pushstate-and-single-page-apps)
- [Vite Base Path Documentation](https://vitejs.dev/config/shared-options.html#base)
