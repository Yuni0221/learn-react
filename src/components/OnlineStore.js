import React, { useState } from "react";
import SearchBar from "./SearchBar";
import StoreTable from "./StoreTable";

function OnlineStore() {
  const [filter, setFilter] = useState({ text: "", inStockOnly: false });

  function updateFilter(key, value) {
    console.log(key, value);
    setFilter({
      ...filter,
      [key]: value,
    });
  }

  const datas = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: false,
      name: "Football",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "Ipod Touch",
    },
    {
      category: "Electronics",
      price: "$309.99",
      stocked: false,
      name: "Nexus 7",
    },
    {
      category: "Sporting Goods",
      price: "$19.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Electronics",
      price: "$109.99",
      stocked: true,
      name: "Iphone",
    },
  ];

  return (
    <div>
      <SearchBar filter={filter} updateFilter={updateFilter} />
      <StoreTable products={datas} filter={filter} />
    </div>
  );
}

export default OnlineStore;
