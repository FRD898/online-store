import { Product, EmptyProduct } from "../../../utils/onlineStoreTypes";
import EmptyList from "./EmptyList/EmptyList";
import Counter from "./Counter/Counter";

import { gql, ReactiveVar, useQuery } from "@apollo/client";
import { useState } from "react";
import ProductList from "./ProductList/ProductList";
import { StyledSearchContainer, StyledSearchInput } from "./CustomSearchProductsStyles";
export const GET_CART = gql`
  query GetCart{
    cart @client{
      date
      productId
      numberOfProducts
      productsValue
      shippingCost
      taxes
      total
    }
  }
`
interface Props {
  products:Product[],
}
export default function SearchProducts(props:Props){
  const {data, error, loading} = useQuery(GET_CART);
  const [item, setItem] = useState("");
  const [searchProducts, setSearchProducts] = useState<Product[]>([]);
  const [selectedItem, setSelectedItem] = useState<Product>(EmptyProduct);

  const handleSearch = (name:string)=>{
    const coincidence: Product[] = props.products.filter(prod => prod.title.toLowerCase().includes(name.toLowerCase()));
    setSearchProducts(coincidence)
  }


  if (loading) return <p>Loading....</p>
  if (error) return <p>Oops, something went wrong {error.message}</p>
  return(
    <StyledSearchContainer>
      <StyledSearchInput type='text' value={item}
      onChange={(e)=>setItem(e.target.value)}
      onKeyDown={(e)=> {if(e.key === "Enter") handleSearch(item)}}
      placeholder="Search Products"
      />

      {searchProducts.length === 0?
      <EmptyList/>:
      <ProductList products={searchProducts} setSelectedItem={setSelectedItem} selectedItem={selectedItem}/>
      }
    </StyledSearchContainer>
  )
}