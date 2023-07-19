module.exports = (req, res, next) => {
    const { difficulty } = req.body.description;

    const difficultyShape = ['Fácil', 'Médio', 'Difícil'];

    if (!difficultyShape.includes(difficulty)) {
        return res.status(400)
        .json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\, ou \'Difícil\''});
    }
    next();
}