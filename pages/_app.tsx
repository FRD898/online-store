import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Product } from "../utils/onlineStoreTypes";
import BasicLayout from "../layout/Basic";
import { ApolloClient, gql, InMemoryCache, ApolloProvider, NormalizedCacheObject, useQuery} from "@apollo/client";
import { cartVar } from "../utils/onlineStoreTypes";

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


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ApolloProvider client={client}>
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  </ApolloProvider>
  )
}

export default MyApp
