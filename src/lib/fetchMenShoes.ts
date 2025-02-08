import { client } from "@/sanity/lib/client";

export async function fetchMenShoes() {
    try {
        const query = `*[_type == "product" && category == "Men's Shoes"]{
            productName, _id, description, inventory, category, price, 
            "image": image.asset->url, status
        }`;

        const products = await client.fetch(query);

        if (!Array.isArray(products) || products.length === 0) {
            throw new Error('No products found');
        }

        return { data: products };
    } catch (error) {
        console.error("Error fetching products:", error);
        return { error: error instanceof Error ? error.message : 'Failed to fetch products' };
    }
}
