
import BasicLayout from "../layout/Basic";
import { GetStaticProps} from "next"
import { Product } from "../utils/onlineStoreTypes";
import { ApolloClient, gql, InMemoryCache, ApolloProvider, NormalizedCacheObject, useQuery} from "@apollo/client";
import { cartVar } from "../utils/onlineStoreTypes";
import HomePage from "../components/HomePage";

const cache = new InMemoryCache({
  typePolicies:{
    Query:{
      fields:{
        cart:{
          read(){
            return cartVar();
          }
        },
        products:{
          read(){
            let p:Product[]=[]
            return p;
          }
        }
      }
    }
  }

})

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
});


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`)
  const data:Product[] = await res.json()
  console.log("1",data)
  return {
      props: { data },
  }
}



interface Props {
  data:Product[],
}

const Home = (props:Props) => {
  return (
    <ApolloProvider client={client}>
      <BasicLayout>
        <HomePage data={props.data}></HomePage>
      </BasicLayout>
    </ApolloProvider>
  );
};

export default Home;