import styled from "styled-components";
import BasicLayout from "../layout/Basic";
import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from "@apollo/client";
import { GET_LAST_ORDER } from "../operations/queries/getCart";
import { useEffect } from "react";
import { Update_Order } from "../operations/mutations/updateCart";


const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 64px 358px;

`

const StyledText = styled.span<{size?:number, weight?: number, color?: string, pointer?: boolean}>`
    font-size: ${p => p.size}px;
    font-weight: ${p => p.weight};
    color: ${p => p.color};
    margin-top: 16px;
    &:hover{
      cursor:${p=>p.pointer?"pointer":"auto"}
    }
`

const GenerateCode = (number:number):string=>{
  return "p"+"0".repeat(4-number.toString().length)+number.toString()
}
const Code:string = "P0001";

const Confirmation = () => {
  const {data,error,loading} = useQuery(GET_LAST_ORDER)
  //console.log("newPage")
  useEffect(()=>{
    //console.log("renderizado")
    return function cleanup(){
      console.log("data to update",data.order.lastNumber);
      Update_Order(data.order.lastNumber+1)
    }
  },[])
    return (
      <BasicLayout>
        <StyledContainer>
            <StyledText size={28} weight={600}>Thank you</StyledText>
            <StyledText>Your order <b>{GenerateCode(data.order.lastNumber+1)}</b> has been registered</StyledText>
            <Link href="/">
                <StyledText color="#0500FF" pointer={true}> Continue shopping</StyledText>
            </Link>
            <Image src="/success-icon.svg" alt="success-icon" width="308" height="288"/>
        </StyledContainer>
      </BasicLayout>
    );
  };
export default Confirmation;