import { useNavigate } from "react-router-dom";

const Card = ({ id, name, price, image, onAddToCart, onBuyNow, onEdit, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      try {
        const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
  
        const response = await fetch(`http://localhost:8000/products/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          onDelete(id); // Update state after successful deletion
          console.log('Product deleted successfully!');
          
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to delete product');
        }
      } catch (error) {
        console.error('❌ Error deleting product:', error);
        console.log(error.message || 'Failed to delete product. Please try again.');
      }
      
    }
  };
  

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200 w-full max-w-sm">
      {/* Product Image */}
      <div className="relative w-full h-64 flex justify-center items-center bg-gray-700">
        <img
          src={image}
          alt={name}
          onClick={() => navigate(`/product/${id}`)}
          className="cursor-pointer object-contain h-full w-full p-4"
        />
        {/* Edit Button */}
        <button onClick={onEdit} className="absolute top-3 right-3 bg-gray-200 p-2 rounded-full hover:invert cursor-pointer transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24">
            <path d="M14.5 5.5L3 17 3 21 7 21 18.5 9.5zM21.2 2.8c-1.1-1.1-2.9-1.1-4 0L16 4l4 4 1.2-1.2C22.3 5.7 22.3 3.9 21.2 2.8z"></path>
          </svg>
        </button>
      </div>

      {/* Product Details */}
      <div className="text-center p-4">
        <h3 className="font-semibold text-gray-100 text-3xl">{name}</h3>
        <p className="text-2xl text-green-600 font-bold mt-1">${price}</p>

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-4 mt-4 pb-4">
          {/* Add to Cart */}
          <button onClick={onAddToCart} className="flex items-center justify-center">
            <img width="24" height="24" className="invert" src="https://img.icons8.com/material/24/shopping-cart--v1.png" alt="shopping-cart--v1" />
          </button>

          {/* Buy Now & Delete Button Container */}
          <div className="flex gap-3">
            {/* Buy Now */}
            <button
              onClick={onBuyNow}
              className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-all focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md"
            >
              Buy Now
            </button>

            {/* Delete Button */}
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white p-2 relative left-7 rounded-lg hover:bg-red-600 transition-all focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24">
                <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
