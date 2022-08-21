
import { GetStaticProps} from "next"
import { Product } from "../utils/onlineStoreTypes";

import HomePage from "../components/HomePage";




export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(process.env.API as string)
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
  <HomePage data={props.data}></HomePage>
  );
};

export default Home;