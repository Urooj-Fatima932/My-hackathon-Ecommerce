import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CountrySelector() {
  return (
    <Select>
      <SelectTrigger className="w-[333px]">
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="usa">United States</SelectItem>
          <SelectItem value="canada">Canada</SelectItem>
          <SelectItem value="mexico">Mexico</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="germany">Germany</SelectItem>
          <SelectItem value="italy">Italy</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="china">China</SelectItem>
          <SelectItem value="india">India</SelectItem>
          <SelectItem value="japan">Japan</SelectItem>
          <SelectItem value="korea">South Korea</SelectItem>
          <SelectItem value="indonesia">Indonesia</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Africa</SelectLabel>
          <SelectItem value="nigeria">Nigeria</SelectItem>
          <SelectItem value="egypt">Egypt</SelectItem>
          <SelectItem value="south-africa">South Africa</SelectItem>
          <SelectItem value="kenya">Kenya</SelectItem>
          <SelectItem value="ethiopia">Ethiopia</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>South America</SelectLabel>
          <SelectItem value="brazil">Brazil</SelectItem>
          <SelectItem value="argentina">Argentina</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="colombia">Colombia</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Australia & Oceania</SelectLabel>
          <SelectItem value="australia">Australia</SelectItem>
          <SelectItem value="new-zealand">New Zealand</SelectItem>
          <SelectItem value="fiji">Fiji</SelectItem>
          <SelectItem value="papua-new-guinea">Papua New Guinea</SelectItem>
          <SelectItem value="samoa">Samoa</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
