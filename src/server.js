import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'index.html')));

app.listen(port);
