import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from "dotenv"
import path from "path"
dotenv.config();

const __dirname=path.resolve();

import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();


app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Routes);

app.use(express.static(path.join(__dirname,"./client/build")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})

const PORT = 8000;

const url=process.env.url;
Connection(url);

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));