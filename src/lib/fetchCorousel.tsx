import {client} from "@/sanity/lib/client"
export async function fetchCorousel(){
    try{
        const query = `*[_type == "product"][0...12]{
  _id,productName,price,category,description,status,"image":image.asset->url
} `
        const products = await client.fetch(query)
        if (!products || products.length === 0) {
            throw new Error('No products found')
    }
    return { data: products }
}
    catch(error){
        console.error("Error fetching products:", error)
    return { error: 'Failed to fetch products' }
    }
}