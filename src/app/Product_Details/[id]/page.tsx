import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import SelectColor from '@/components/selectColor';
import SelectDemo from '@/components/selectSize';
import AddToCartButton from '@/components/AddToCartButton';
import WishButton from '@/components/wishButton';

interface Product {
  _id: string;
  productName: string;
  description: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
  inventory: number;
}

interface ProductDetailsProps {
  params: Promise<{ id: string }>; // Treat `params` as a Promise
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  // ✅ Await params before accessing `id`
  const { id } = await params;

  if (!id) {
    return notFound();
  }

  const query = `*[_type == "product" && _id == $id][0]{
    productName,
    _id,
    description,
    price,
    "image": image.asset->url,
    category,
    colors,
    inventory
  }`;

  try {
    const product: Product | null = await client.fetch(query, { id });

    if (!product) {
      return notFound();
    }

    return (
      <main className="min-h-screen">
        <div className="w-[90%] md:w-[70%] mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-9">
          {/* Product Image */}
          <Image className="sticky" src={product.image} alt={product.productName} width={500} height={500} />

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-Cblack">{product.productName}</h1>
            <h3 className="text-lg text-gray-500">{product.category}</h3>
            <p className="text-lg text-Cblack my-8">{product.description}</p>

            {/* Select Color */}
            <SelectColor colors={product.colors} />

            {/* Select Size */}
            <div className="flex my-6 items-center">
              <span className="mr-3">Size</span>
              <SelectDemo />
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 w-full">
              <div className="w-[70%]"><AddToCartButton product={product} /></div>
              <div className="w-[10%]"><WishButton product={product} /></div>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return notFound();
  }
}
