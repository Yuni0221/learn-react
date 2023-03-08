import React from "react";
import ProductsTable from "./ProductsTable";

function StoreTable(props) {
  const { products, filter } = props;

  const targetProduct = products.filter((p) => p.name === filter.text);
  const filteredProducts = targetProduct.length > 0 ? targetProduct : products;

  console.log(filteredProducts);
  const result = filteredProducts.reduce((acc, cur) => {
    if (acc.hasOwnProperty(cur.category)) {
      return {
        ...acc,
        [cur.category]: [...acc[cur.category], cur],
      };
    } else {
      return {
        ...acc,
        [cur.category]: [cur],
      };
    }
  }, {});
  const keys = Object.keys(result);

  return (
    <>
      <tr style={{ fontWeight: "bold" }}>
        <td>Name</td>
        <td>Price</td>
      </tr>

      {keys.map((key, idx) => (
        <ProductsTable
          category={[key]}
          items={result[key]}
          key={idx}
          inStockOnly={filter.inStockOnly}
        />
      ))}
    </>
  );
}

export default StoreTable;
