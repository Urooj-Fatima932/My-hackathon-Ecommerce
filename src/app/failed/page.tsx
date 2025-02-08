import Image from "next/image";



interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const ProductsPage = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <h1>Our Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="p-4 border rounded-lg">
            <Image src={product.image} width={40} height={40} alt={product.name} className="w-full h-40 object-cover" />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
