import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect('mongodb+srv://mongo:swoosh123@cluster0.nquss.mongodb.net/test', {
    //useNewUrlParser: true,
    useUnifiedTopology: true,
    //new comment
    //useCreateIndex: true,
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

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