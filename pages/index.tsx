import styled from "styled-components";
import BasicLayout from "../layout/Basic";
import Card from "../components/Card";

const Title = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <BasicLayout>
      <p>hello</p>
      <Title>Title</Title>
      <Card></Card>
    </BasicLayout>
  );
};

export default Home;