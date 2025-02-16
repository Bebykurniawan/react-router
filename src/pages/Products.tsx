import { useSearchParams } from "react-router";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortAsc = (valueSort: string): void => {
    searchParams.set("sort", valueSort);
    setSearchParams(searchParams)
  };
  return (
    <div>
      <h1>Product List Page</h1>
      <ul>
        <li>Sort : {searchParams.get("sort")}</li>
        <li>Name : {searchParams.get("name")}</li>
      </ul>

      <button onClick={() => handleSortAsc("price-asc")}>Sort Price</button>
      <button onClick={() => handleSortAsc("rating-asc")}>Sort Rating</button>
      <button onClick={() => handleSortAsc("popular-asc")}>Sort Popular</button>
    </div>
  );
};

export default Products;
