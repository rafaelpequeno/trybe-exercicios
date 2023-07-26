const express = require('express');

const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');

const auth = require('./middlewares/auth');
const generateToken = require('./utils/generateToken');

const app = express();

app.use(express.json());

app.post('/signup', (req, res) => {
    const { email, password, firstName, phone } = req.body;

    if ([email, password, firstName, phone].includes(undefined)) {
        return res.status(401).json({ message: 'Campos ausentes'});
    }

    const token = generateToken();

    return res.status(200).json({ token });
});

app.post('/activities',
    auth,
    validateName, 
    validatePrice, 
    validateDescription, 
    validateCreatedAt, 
    validateRating,
    validateDifficulty, (req, res) => {
    res.status(201).json({ "message": "Atividade cadastrada com sucesso!"});
});

module.exports = app;