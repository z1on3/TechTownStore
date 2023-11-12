import Fetchdata from "../components/Fetchdata";
import SingleProduct from "./SingleProduct";

const FeatureProducts = () => {
  const products = Fetchdata();

  return (
    <section className="container mx-auto bg-black text-white">
      <h2 className="text-4xl py-10 text-center font-medium text-white-700">
        BLACK FRIDAY FEATURED PRODUCTS
      </h2>
      <div className="grid grid-cols-3 gap-10 w-[80%] mx-auto pb-20">
        {products &&
          products
            .filter((product) => product.category === "gaming pc")
            .slice(0, 3)
            .map((product) => {
              return <SingleProduct key={product.id} product={product} />;
            })
            .concat(
              products
                .filter((product) => product.category === "laptop")
                .slice(0, 3)
                .map((product) => {
                  return <SingleProduct key={product.id} product={product} />;
                })
            )}
      </div>
    </section>
  );
};

export default FeatureProducts;
