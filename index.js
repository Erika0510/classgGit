const express = require('express');
process.loadEnvFile();
const app = express();

const port = 3000 || process.env.PORT;

app.use(express.json());

app.use('/comics', require('./routes/comics'));
app.use('/pokemon-species', require('./routes/pokemon-species'));
app.listen(port, () => {
    console.log(`hola mundo en el puerto `);
});