import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { img, name, brand, price } = product;

  var imghost = "http://127.0.0.1:8000/"+img;

  return (
    <div className="single-product flex flex-col bg-black text-white gap-3 shadow-md hover:shadow-xl hover:scale-105 duration-300 px-4 py-7 rounded-sm overflow-hidden">
      <div className="flex justify-center">
        <img
          className="w-72 h-48 object-contain hover:scale-110 duration-500"
          src={imghost}
          alt={name}
        />
      </div>
      <Link
        to={name}
        state={product}
        className="hover:text-red-500 duration-300 flex justify-between items-center"
      >
        <h2 className="text-red-500 font-semibold text-xl capitalize">
          {product.name.slice(0, 20)}
        </h2>
      </Link>
      <p className="text-sm text-gray-600">
        Brand: <span className="font-semibold capitalize">{brand}</span>
      </p>
      <p className="text-sm text-gray-600">
        Price: <span className="text-red-500 font-semibold">{price}</span>
      </p>
      <div className="flex justify-between items-center">
        <Link
          to={name}
          state={product}
          className="hover:text-red-500 text-gray-400 duration-300 flex justify-between items-center"
        >
          <button className="text-red-500 px-2 py-1 border border-red-500 rounded-md hover:bg-red-500 hover:text-white duration-300">
            More Info
          </button>
        </Link>
        <button
          onClick={() => console.log("Add to Cart")}
          className="bg-red-500 text-white hover:bg-white hover:text-red-500 duration-300 border border-red-500 px-2 py-1 rounded-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
