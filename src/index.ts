import express, { json } from 'express';
import https from 'https';
import fs from 'fs';

import router from './router';

const PORT = process.env.PORT || 3000; // http://localhost:3000 for local development

const app = express();

app.use(json());
app.use(router);

const server = https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app)
  

server.listen(PORT, () => {
    console.log(`Server up on port ${PORT}`);
});