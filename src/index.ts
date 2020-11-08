import express, { json } from 'express';

import router from './server/router';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server up on port ${PORT}`);
});