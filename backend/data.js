import bcrypt from "bcryptjs";

const data = {

    users: [
        {
            name:'Mirkan',
            email:'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },

        {
            name:'Fabian',
            email:'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],

    products: [

        {
            name: 'Air Jordan 1 Mid',
            category: 'High Top',
            image: '/images/p1.jpg',
            price: 290.99,
            countInStock: 2,
            brand: 'Nike',
            rating: 4.0,
            numReviews: 22,
            description: 'The new Air Jordan 1 Mid in Grey ' 
        },
        {

            name: 'Ultra Boost 1.0',
            category: 'Running',
            image: '/images/p2.jpg',
            price: 240.99,
            countInStock: 4,
            brand: 'Adidas',
            rating: 5,
            numReviews: 300,
            description: 'The Lifestyle running shoe' 
        },
        {

            name: 'Yeezy Boost 350 V2',
            category: 'Low Top',
            image: '/images/p3.jpg',
            price: 220.00,
            countInStock: 1,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 1111,
            description: 'Kanyes newest creation' 
        },
        {

            name: 'Air Jordan 1 High OG Royal Blue',
            category: 'High Top',
            image: '/images/p4.jpg',
            price: 379.99,
            countInStock: 2,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 22,
            description: 'The new Air Jordan 1 High in the sickest blue imaginable' 
        },
        {
 
            name: 'Nike x Parra Air Max 1',
            category: 'low Top',
            image: '/images/p5.jpg',
            price: 129.99,
            countInStock: 2,
            brand: 'Nike',
            rating: 5,
            numReviews: 183,
            description: 'The first collaboration between Nike and Parra' 
        },

 
    ]
}

export default data;