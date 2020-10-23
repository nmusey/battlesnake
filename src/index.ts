import express from 'express';

import {PORT} from './constants';
import {router} from './router';

const app = express();

app.use(router)

app.listen(PORT, () => {
    console.log(`Server up on port ${PORT}`);
});