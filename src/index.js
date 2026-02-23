import express from 'express';
import { matchRouter } from './routes/matchs.js';


const app = express();
const port = 8000;

app.use(express.json());


app.get('/', (req, res) => {
    res.send('hello from  Express Server');

});

app.use('/matches', matchRouter);

app.listen(port, ()=> {
    console.log(`Server is Running on Port ${port}`);
    
})