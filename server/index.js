const experss = require('express');

const app = new experss();

app.get('/', (_req, res) => {
    res.send(
        `<h1>React is Excellent</h1>`
    )
});

app.listen(7777);
console.log("Server is listening.");