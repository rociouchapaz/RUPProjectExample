const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {

    const name = req.query.name;
    res.send('Hello World!');
});

app.get('/hello', (req, res) => {

    const name = req.query.name;
    res.send(`Hello World! ${name}`);
    res.status(200).send('Hello World Invalid');
});

app.get('/checkemail', (req, res) => {

    const email = req.query.name;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        res.send(`Email válido`);
    } else {
        res.send(`Email inválido`);
    }

    res.send(`Hello World! ${name}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
