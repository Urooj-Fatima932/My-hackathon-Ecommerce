import { client } from "@/sanity/lib/client";

export async function fetchAllProducts() {
    try {
        const query = `*[_type == "product"]{
            _id, productName, price, category, description, status, 
            "image": image.asset->url, inventory
        }`;

        const products = await client.fetch(query);

        if (!products || products.length === 0) {
            throw new Error("No products found");
        }

        return { data: products };
    } catch (error) {
        console.error("Error fetching products:", error);
        return { error: "Failed to fetch products" };
    }
}

export async function fetchProducts(id: string) {
    try {
        const query = `*[_type == "shoe" && _id == $id]{
            "id": _id, name, price, category, description, status, 
            "image": image.asset->url, inventory
        }[0]`;

        const product = await client.fetch(query, { id });

        if (!product) {
            throw new Error("Product not found");
        }

        return { result: product };
    } catch (error) {
        console.error("Error fetching product:", error);
        return { error: "Failed to fetch product" };
    }
}
