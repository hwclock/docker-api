import express from 'express';
import cors from 'cors';

const app = express();
const allowedOrigins = ['http://localhost:8080', 'http://172.17.0.1:8080'];
const options = {
    origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());

app.get('/', (req, res) => {
    const number = Math.floor(Math.random() * 100);
    res.send(`${number}\n`);
});

app.listen(3000, () => {
    console.log('API listening on port 3000.....');
});