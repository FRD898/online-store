import styled from "styled-components";
import BasicLayout from "../layout/Basic";
import Card from "../components/Card";
import SearchProducts from "../components/SearchProducts";
import { GetStaticProps} from "next"
import { Product } from "../utils/onlineStoreTypes";
import OrderResume from "../components/OrderResume";
const Title = styled.h1`
  color: red;
`;

const test = {
  id: 1,
  title: "Yogurt Laive",
  price: 12.45,
  image: "https://plazavea.vteximg.com.br/arquivos/ids/442423-1000-1000/20202120.jpg?v=637388408426600000",
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`)
  const data:Product[] = await res.json()
  console.log("1",data)
  return {
      props: { data },
  }
}

const StyledHomePageContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  padding-top: 100px;
`

interface Props {
  data:Product[],
}

const Home = (props:Props) => {
  return (
    <BasicLayout>
      <StyledHomePageContainer>
        <SearchProducts products ={props.data}></SearchProducts>
        <OrderResume></OrderResume>
      </StyledHomePageContainer>
    </BasicLayout>
  );
};

export default Home;