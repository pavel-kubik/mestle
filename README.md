# Mestle

Guess Czech city. Each day is randomly chosen new city. Differences between target city and last attempt are shown at each step.

## Development

If you need just start UI without other dependencies, you can start local development server with following command.

`npm start`

### Running Netlify Locally

You can start netlify in development mode with:

`netlify dev`

For this you will need local mongo db storage. Run following command to have mongo db from docker:

`docker run -d -p 27017:27017 --name mongo mongo:latest`

### Testing Production Build Locally

To test the production build with Netlify redirect rules locally:

1. Build the project:
   ```bash
   npm run build
   ```

2. Serve the production build with Netlify:
   ```bash
   npx netlify serve
   ```

   This will:
   - Build the project (if not already built)
   - Bundle Netlify functions
   - Apply redirect rules from `netlify.toml`
   - Start a local server at `http://localhost:8888`

3. Test the deployment preview behavior without deploying to Netlify

### Testing

Run test coverage with command

`npm run test:coverage`

### Formatter

Formatter and lint check are run in pre commit hook. You can run it manually with following commands.

`npm run lint`
`npm run format`

### Project is deployed to mestle.cz with netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/9e3e535e-ae8e-482e-afb4-9b416e0881aa/deploy-status)](https://app.netlify.com/sites/lustrous-puffpuff-c8e9da/deploys)

### Netlify and Vite

https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/

### Issues

Netlify can crash and keep port open in background during local development of netlify functions. It prevents to start server again.

Windows command:

```
netstat -ano | findstr :3000.*LISTENING
tskill port
```
