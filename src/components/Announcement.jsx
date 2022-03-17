import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background: linear-gradient(to right, #2c3e50, #4ca1af);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bolder;
`;

const Announcement = () => {
  return <Container>Super Deal ! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
