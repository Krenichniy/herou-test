const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config()
const { DB_HOST, PORT = 3007 } = process.env;
app.use(cors());
app.use(express.json())
app.get('/', (req, res) => { 
    res.send('Hello admin')
})

app.post('/contacts', (req, res) => {
    res.send(req.body)
})

app.use((req, res,  next) => {
    res.status(404).send('Not Found')
})

app.use((err, req, res, next) => { 
    const { status = 500, message } = err;
       res.status(status).send(message) 
})

mongoose.connect(DB_HOST, () => {
    console.log('Server started on http://localhost:3007');
})
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})