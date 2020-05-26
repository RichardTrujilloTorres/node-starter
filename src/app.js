import express from 'express';
import env from './config/environment';

const app = express();
const port = env.app.port;


app.get('/', (req, res) => {
    res.json({
        message: 'All good'
    });
});


app.listen(port, () => {
    console.log(`${env.app.name} is running at port ${port}`);
});

