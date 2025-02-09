"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard2 from "@/components/ProductCard2";
import { fetchAllProducts } from "@/lib/fetchAllProducts";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationItem } from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Searchbar from "@/components/searchBar";

interface Product {
  productName: string;
  image: string;
  inventory: string;
  price: number;
  category: string;
  status: string;
  _id: string;
  colors: string;
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("price_asc");
  const [priceRange, setPriceRange] = useState<{ min: number | string; max: number | string }>({ min: '', max: '' });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true before fetching data
        const result = await fetchAllProducts();
        
        if (result?.data) {
          setProducts(result.data); // Set products if data exists
        } else {
          setError(result?.error || "Unknown error"); // Set error message if no data
        }
      } catch (err) {
        setError("Failed to fetch data"); // Handle fetch error
        console.log("Error during fetch:", err); // Log the actual error
      } finally {
        setLoading(false); // Ensure loading is set to false after fetching
      }
    };
  
    fetchData();
  }, [setProducts, setError, setLoading]); // Include functions in the dependency array if needed
  

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesPrice = (
        (priceRange.min === '' || product.price >= Number(priceRange.min)) &&
        (priceRange.max === '' || product.price <= Number(priceRange.max))
      );
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price_asc':
          return a.price - b.price;
        case 'price_desc':
          return b.price - a.price;
        case 'name_asc':
          return a.productName.localeCompare(b.productName);
        case 'name_desc':
          return b.productName.localeCompare(a.productName);
        default:
          return 0;
      }
    });

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    setPriceRange(prev => ({
      ...prev,
      [type]: value === '' ? '' : Number(value)
    }));
    setCurrentPage(1);
  };

  // Get unique categories
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <main>
      <div className="w-[93%] md:w-[80%] mx-auto my-10 text-[#111111] gap-6">
        {/* Filters Section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-4 mb-8">
  {/* Searchbar - 40% width on large screens */}
  <div className="w-full lg:w-[40%]">
    <Searchbar  onSearch={handleSearch}/>
  </div>

  {/* Category Select - 20% width on large screens */}
  <div className="w-full md:w-[48%] lg:w-[20%]">
    <select
      value={selectedCategory}
      onChange={(e) => handleCategoryChange(e.target.value)}
      className="w-full p-2 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-black focus:ring-primary"
    >
      <option value="all">All Categories</option>
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  </div>

  {/* Sort Select - 20% width on large screens */}
  <div className="w-full md:w-[48%] lg:w-[20%]">
    <select
      value={sortBy}
      onChange={(e) => handleSortChange(e.target.value)}
      className="w-full p-2 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-black focus:ring-primary"
    >
      <option value="price_asc">Price: Low to High</option>
      <option value="price_desc">Price: High to Low</option>
      <option value="name_asc">Name: A-Z</option>
      <option value="name_desc">Name: Z-A</option>
    </select>
  </div>

  {/* Price Range - 20% width on large screens */}
  <div className="w-full md:w-[48%] lg:w-[20%]">
    <div className="flex gap-2 w-full">
      <input
        type="number"
        placeholder="Min price"
        value={priceRange.min}
        onChange={(e) => handlePriceChange('min', e.target.value)}
        className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:ring-sidebar-primary"
      />
      <input
        type="number"
        placeholder="Max price"
        value={priceRange.max}
        onChange={(e) => handlePriceChange('max', e.target.value)}
        className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:ring-primary"
      />
    </div>
  </div>
</div>

        {/* Rest of the code remains the same */}
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <>
            <div className="grid w-full grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 p-4">
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((product) => (
                  <Link href={`/Product_Details/${product._id}`} key={product._id}>
                    <ProductCard2
                      status={product.status}
                      alt={product.productName}
                      image={product.image}
                      name={product.productName}
                      price={product.price}
                      category={product.category}
                    />
                  </Link>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500">No products found matching your criteria</p>
                </div>
              )}
            </div>

            {paginatedProducts.length > 0 && (
              <Pagination className="mt-6 flex justify-center items-center gap-4">
                <PaginationItem>
                  <Button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    variant="outline"
                  >
                    <ChevronLeft/>
                  </Button>
                </PaginationItem>

                <PaginationItem>
                  <span className="text-gray-700 font-semibold">
                    Page {currentPage} of {totalPages}
                  </span>
                </PaginationItem>

                <PaginationItem>
                  <Button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    variant="outline"
                  >
                    <ChevronRight/>
                  </Button>
                </PaginationItem>
              </Pagination>
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default Products;