import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function InputSearch() {
  const [search, setSearch] = useState("");
  return (
    <div className="relative">
      <div className="absolute top-1/2 -translate-y-1/2 right-4">
        <FaSearch />
      </div>

      <Input
        onChange={(e) => setSearch(e.target.value)}
        borderRadius={'50px'}
        width={'400px'}
        variant="filled"
        placeholder="search"
      />
    </div>
  );
}
