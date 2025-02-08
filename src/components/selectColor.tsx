"use client"; // Mark this as a client component
import { useSelect } from "@/context/selectContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

  
interface SelectColorProps {
  colors: string[]; // List of color options
   // Function to handle color selection
}

export default function SelectColor({ colors }: SelectColorProps) {
  const { setSelectedColor } = useSelect();
  return (
    <div className="flex my-6 items-center">
      <span className="mr-3">Colors</span>
      {colors.length > 0 ? (
        <Select  onValueChange={(value) => setSelectedColor(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select color" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {colors.map((color, index) => (
                <SelectItem key={index} value={color}>
                  {color}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      ) : (
        <span className="text-gray-500">No colors available</span>
      )}
    </div>
  );
}
