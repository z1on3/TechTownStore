import { Link, useLocation } from "react-router-dom";

const ProductDetails = () => {
  const { state: product } = useLocation();

  const { img, name, description, category, brand, rating, price } = product;
  var imghost = "http://127.0.0.1:8000/"+img;
  return (
    <section className="flex flex-col gap-16 py-10 bg-gray-100">
      <div className="container mx-auto flex justify-around  items-center w-[80%]">
        <div className="w-96 flex justify-end">
          <img src={imghost} alt={name} className="w-full select-none" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-500">
            {"Home/"}
            {<Link to="/product">product</Link>}
            {`/${name}`}
          </p>
          <h2 className="text-4xl">{name.slice(0, 30)}</h2>
          <span className="font-semibold">
            Price: <span className="text-2xl">{price}</span>
          </span>
          <span className="font-semibold">Brand: {brand}</span>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">Key features</h1>
            <p className="text-gray-800">{description.slice(0, 35)}</p>
            <p className="text-gray-800">{description.slice(36, 70)}</p>
            <p className="text-gray-800">{description.slice(71, 100)}</p>
            <p className="text-gray-800">{description.slice(101, 130)}</p>
            <p className="text-gray-800">{description.slice(131, 170)}</p>
            <p className="text-gray-800">{description.slice(170, 201)}</p>
          </div>
          <span className="font-semibold">Category:<span> {category}</span></span>
            <span className="font-semibold">
              Rating:{" "}
              <span className="text-rose-500 font-bold">
                {rating.slice(0, 3)}
              </span>
              <span>{rating.slice(3)}</span>
            </span>

          <button
            onClick={() => console.log("ksk")}
            className="bg-sky-500 text-sky-50 px-2 py-1 mt-4"
          >
            add to cart
          </button>
        </div>
      </div>
      <Link
        to="/products"
        className="text-xl py-1 text-center hover:text-cyan-500 duration-300 select-none"
      >
        &larr; Go to Products
      </Link>
    </section>
  );
};

export default ProductDetails;
