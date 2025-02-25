import Card from "./card";


const Product = () => {
    const products = [
        {
            id: 1,
            name: 'Lego Avengers Tower',
            price: 150,
            image: 'https://www.lego.com/cdn/cs/set/assets/blta44628ca57bd7d14/76269_boxprod_v39.png?fit=crop&quality=80&width=400&height=400&dpr=1',
        },
        {
            id: 2,
            name: 'Lego Starwars',
            price: 250,
            image: 'https://www.parents.com/thmb/Q04mni7isiGAM5jk1ZhdIHu29ww=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/Lego--Star-Wars-the-Dark-Falcon-0f1b7f8bccff475297614f99852a4b85.jpg',
        },
        {
            id: 3,
            name: 'Lego Jungle',
            price: 50,
            image: 'https://brickarchitect.com/wp-content/uploads/2024/05/8Y1A9007-620x413.jpg',
        },
        {
            id: 4,
            name: 'Lego Camera',
            price: 90,
            image: 'https://variety.com/wp-content/uploads/2024/10/Screen-Shot-2024-10-08-at-1.02.19-PM.png?w=1000&h=667&crop=1',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-800 to-blue-600 p-6">
            <h1 className="text-5xl font-bold text-center text-white mb-10">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>

    )
}

export default Product
