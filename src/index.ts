import express, { json } from 'express';

import router from './router';

const PORT = process.env.PORT || 3000; // http://localhost:3000 for local development

const app = express();

app.use(json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server up on port ${PORT}\nIf you're developing locally, visit http://localhost:3000`);
});