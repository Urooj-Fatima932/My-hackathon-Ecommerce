
import { client } from "@/sanity/lib/client";
import SelectDemo from "@/components/selectSize";
import * as React from "react";



import Image from "next/image";

import SelectColor from "@/components/selectColor";
import AddToCartButton from "@/components/AddToCartButton";
import WishButton from "@/components/wishButton";

async function Product_Details({ params }: { params: { id: string } }) {
  const { id } = params;

  // Ensure the id exists
  if (!id) {
    throw new Error("Product ID is missing");
  }

  // Modify the query to pass the `id` as a parameter
  const query = `*[_type == "product" && _id == $id][0]{
    productName,
    _id,
    description,
    inventory,
    category,
    price,
    "image": image.asset->url,
    status,
    colors
  }`;

  const product = await client.fetch(query, { id }); // Pass `id` here as a parameter
  const colors=product.colors||[]
 

  if (!product) {
    return <h1 className="text-center text-red-500">Product Not Found</h1>;
  }

  return (
   <main className="min-h-screen">
    <div className="w-[90%] md:w-[70%] mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-9">
      <Image  className="sticky" src={product.image} alt={product.productName} width={500} height={500} />
   
    <div>
      <h1 className="text-3xl font-bold text-Cblack">{product.productName}</h1>
      <h3 className="text-lg text-gray-500">{product.category}</h3>
      <p className="text-lg text-Cblack my-8">
        {product.description}
      </p>
      
     
  <SelectColor colors={colors} />

               <div className="flex my-6 items-center">
                <span className="mr-3">Size</span>
                <SelectDemo/>
              </div>
<div className="flex justify-center gap-4 w-full">
<div className="w-[70%]"><AddToCartButton product={product}/></div>
<div className="w-[10%]"><WishButton product={product}/></div>
</div>


       </div>
    </div>
   </main>
  );
}


export default Product_Details;
