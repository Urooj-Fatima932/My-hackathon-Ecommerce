/* eslint-disable @typescript-eslint/no-require-imports, 
                  @typescript-eslint/no-explicit-any, 
                  @typescript-eslint/no-unused-vars, 
                  prefer-const */




import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export interface ICartItem {
    id: string;
    productName: string;
    category: string;
    selectedColor: string;
    price: number;
    image: string;
    selectedSize: string;
    inventory: number;
    quantity: number;
  }
const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list();
  const availableProducts = checkProducts.data.filter(
    (product: any) => product.active === true
  );
  return availableProducts;
};

export const POST = async (request: any) => {
  const { products } = await request.json();
  const data: ICartItem[] = products;

  let activeProducts = await getActiveProducts();

  try {
    for (const product of data) {
      const stripeProduct = activeProducts?.find(
        (stripeProduct: any) =>
          stripeProduct?.name?.toLowerCase() == product?.productName?.toLowerCase()
      );

      if (stripeProduct == undefined) {
        const prod = await stripe.products.create({
          name: product.productName,
          images: [product.image],
          default_price_data: {
            unit_amount: product.price * 100,
            currency: "pkr",
          },
        });
      }
    }
  } catch (error) {
    console.error("Error in creating a new product", error);
    throw error;
  }

  activeProducts = await getActiveProducts();
  let stripeItems: any = [];

  for (const product of data) {
    const stripeProduct = activeProducts?.find(
      (prod: any) => prod?.name?.toLowerCase() == product?.productName?.toLowerCase()
    );

    if (stripeProduct) {
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: product?.quantity,
      });
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  return NextResponse.json({ url: session.url });
};