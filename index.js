const express = require('express');
process.loadEnvFile();
const app = express();

const port = 3000 || process.env.PORT;

app.use(express.json());


app.use('/pokemon', require('./routes/pokemon'));


app.listen(port, () => {
    console.log(`hola mundo en el puerto `);
});