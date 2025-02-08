'use client'
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useSelect } from "@/context/selectContext";

export default function SelectDemo() {
  const { setSelectedSize } = useSelect();
  return (
    <Select onValueChange={(value) => setSelectedSize(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Size" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Available Sizes</SelectLabel>
          <SelectItem value="M">M</SelectItem>
          <SelectItem value="SM">SM</SelectItem>
          <SelectItem value="L">L</SelectItem>
          <SelectItem value="XL">XL</SelectItem>
          <SelectItem value="XXL">XXL</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
