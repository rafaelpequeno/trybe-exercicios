const express = require('express');
const readJson = require('./utils');

const app = express();

app.listen(3001, () => console.log('Server running on port 3001'));


app.get('/', async (req, res) => {
    const data = await readJson();
    res.json({ data })

});

module.exports = app;