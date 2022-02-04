import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import User from './models/userModel.js';
import Order from './models/orderModel.js';
import bcrypt from 'bcryptjs';

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

app.get('/api/b2b/customers', async(req, res) => {
    const cust = await User.find({});
    return res.send(cust);
});

//B2B endpoint to get order history given user ID
app.get('/api/b2b/orders', async(req, res) => {
    const customer = req.query.user;
    console.log(req.query.user);

    const orders = await Order.find({user:customer})
    return res.send(orders);
});

//endpoint b2b order procurement
app.post('/api/b2b/orders/buy', async(req, res) => {

    const ordered = new Order({
        orderitems: {
            name: req.query.name,
            qty: 1,
            image: "/images/p3.jpg",
            price: 220,
            product: "61fa5e14127e4c5351ac29a7",
        },
        shippingAddress: {
            fullName: req.query.shipname,
            address: req.query.shipaddress,
            city: req.query.shipcity,
            postalCode: req.query.shipzip,
            country: req.query.shipcountry,
        },
        paymentMethod : req.query.paymentMethod,
        itemsPrice :  220,
        shippingPrice : 0,
        taxPrice : 46,
        totalPrice : 266,
        user :  req.query.id
    });

    const createdOrder = await ordered.save();
    res.status(201).send({message: 'New Order created!', order: createdOrder});

});

//B2B endpoint to register user
app.post('/api/b2b/register', async(req, res) => {

    const user = new User({
        name: req.query.name,
        email: req.query.email,
        password: bcrypt.hashSync(req.query.password, 8),
    });

    const createdUser = await user.save();
    res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        //token: generateToken(createdUser),
    });
    
});

//endpoint to search for products, given a shoe name
app.use('/api/b2b/products', productRouter);

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});

const port = process.env.PORT || 5050;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});