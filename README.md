# Mestle

Guess Czech city. Each day is randomly chosen new city. Differences between target city and last attempt are shown at each step.

## Development

If you need just start UI without other dependencies, you can start local development server with following command.

`npm start`

You can also start netlify locally with command

`netlify dev`

For this you will need local mongo db storage. So run following command to have mongo db from docker

`docker run -d -p 27017:27017 --name mongo mongo:latest`

### Formatter

Formatter and lint check are run in pre commit hook. You can run it manually with following commands.

`npm run lint`
`npm run format`

### Project is deployed to mestle.cz with netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/9e3e535e-ae8e-482e-afb4-9b416e0881aa/deploy-status)](https://app.netlify.com/sites/lustrous-puffpuff-c8e9da/deploys)
