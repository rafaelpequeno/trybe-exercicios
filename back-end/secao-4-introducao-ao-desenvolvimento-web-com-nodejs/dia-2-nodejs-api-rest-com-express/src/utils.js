const fs = require('fs/promises');
const path = require('path')

const moviesPath = path.resolve(__dirname, './movies.json');

const readJson = async () => {
    try {
        const data = await fs.readFile(moviesPath)
        return JSON.parse(data);
        
    } catch (error) {
        console.error(`Erro ao ler arquivo: ${error.message}`);
    }
};

module.exports = readJson;