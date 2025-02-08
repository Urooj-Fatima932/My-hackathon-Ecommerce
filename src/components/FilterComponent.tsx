"use client";

import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FilterProps {
  categories: string[];
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
}

const FilterComponent: React.FC<FilterProps> = ({ categories, onSearch, onCategoryChange }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery, onSearch]);

  useEffect(() => {
    onCategoryChange(selectedCategory);
  }, [selectedCategory, onCategoryChange]);

  return (
    <div className="flex gap-4 mb-4">
      <Input
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-grow"
      />
      <Select onValueChange={(value) => setSelectedCategory(value)}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}>
        Reset
      </Button>
    </div>
  );
};

export default FilterComponent;
