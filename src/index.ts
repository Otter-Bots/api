import express from 'express';
import "dotenv/config";
const { PORT } = process.env;
const app = express();
app.get('/', (_req, res) => {
    res.send('Hello World!');
});
app.listen(Number(PORT), () => {
    console.log(`Listening on port ${PORT}`);
});