import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';

const app = express();
mongoose.connect('mongodb+srv://mongo:swoosh123@cluster0.nquss.mongodb.net/test', {
    //useNewUrlParser: true,
    useUnifiedTopology: true,
    //new comment
    //useCreateIndex: true,
});

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find( (x) => x._id === req.params.id);
    if(product) {
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'});
    }
    res.send(data.products);
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});

const port = process.env.PORT || 5050;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});