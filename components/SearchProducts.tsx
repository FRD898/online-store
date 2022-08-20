import styled from "styled-components";
import { Product } from "../utils/onlineStoreTypes";
import EmptyList from "./EmptyList";
import Counter from "./Counter";

const StyledSearchInput = styled.input`
  width: 360px;
  height: 48px;
  border: 1px solid #DDDDDD;
  border-radius: 4px;
  background: #FFFFFF;
  color: black;
  padding: 12px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
`

const StyledSearchContainer = styled.div`
  
`

interface Props {
  products:Product[],
}
import { gql, ReactiveVar, useQuery } from "@apollo/client";
import { useState } from "react";
import ProductList from "./ProductList";
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

export default function SearchProducts(props:Props){
  const {data, error, loading} = useQuery(GET_CART);
  const [item, setItem] = useState("")
  const [searchProducts, setSearchProducts] = useState<Product[]>([])
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
      <ProductList products={searchProducts}/>
    }
    </StyledSearchContainer>
  )
}