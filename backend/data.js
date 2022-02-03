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
            countInStock: 20,
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
            countInStock: 13,
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

        {
            
            name: 'Air Jordan 4 University Blue',
            category: 'High Top',
            image: '/images/p1.jpg',
            price: 370.00,
            countInStock: 4,
            brand: 'Nike',
            rating: 5,
            numReviews: 9,
            description: 'Classic Air Jordan in the colorway of UNC' 
        },

        {
            
            name: 'Jordan 1 Low Fragment x Travis Scott',
            category: 'High Top',
            image: '/images/p2.jpg',
            price: 1250.00,
            countInStock: 2,
            brand: 'Nike',
            rating: 5,
            numReviews: 42,
            description: 'The latest collab of rap artist Travis Scott, Nike and Fragment' 
        },

        {
            
            name: 'Nike Air Force 1 Low OFF-WHITE',
            category: 'Low Top',
            image: '../images/p4.jpg',
            price: 1700.00,
            countInStock: 1,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 6,
            description: 'In honor of the late Virgil Abloh' 
        },

        {
            
            name: 'Nike Blazer Mid 77 Have a good game',
            category: 'High Top',
            image: '../images/p5.jpg',
            price: 300.00,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.0,
            numReviews: 12,
            description: 'Classic ´77 Blazer - with a Twist' 
        },

        {
            
            name: 'Nike MAG Back to the Future 2016',
            category: 'High Top',
            image: './images/p3.jpg',
            price: 125000.00,
            countInStock: 0,
            brand: 'Nike',
            rating: 5,
            numReviews: 1,
            description: 'Alltime classic. Self-lacing. Need we say more?' 
        }

    ]
}

export default data;