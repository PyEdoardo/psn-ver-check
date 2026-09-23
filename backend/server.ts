import express from 'express'
import router from './src/api/router';

const app = express();
const port = 3000;

app.use(router);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});