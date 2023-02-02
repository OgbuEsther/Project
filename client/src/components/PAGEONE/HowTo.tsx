import React from "react";
import styled from "styled-components";

const HowTo = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <TextHold>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <h1>how to order services</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
              doloremque consequuntur? Aliquam consectetur iure culpa.
            </p>
          </TextHold>
          <BoxHold>
            <Box>
              <Img></Img>
              <h3>Order On Whatsapp</h3>
              <p>click on the link below to order on whatsapp</p>
              <link rel="stylesheet" href="" />
            </Box>
            <Box>
              <Img></Img>
              <h3>Order On FaceBook</h3>
              <p>click on the link below to order on FaceBook</p>
              <link rel="stylesheet" href="" />
            </Box>
            <Box>
              <Img></Img>
              <h3>Order On Instagram</h3>
              <p>click on the link below to order on Instagram</p>
              <link rel="stylesheet" href="" />
            </Box>
          </BoxHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default HowTo;

const Img = styled.div`
  width: 150px;
  height: 70px;
  background-color: pink;
`;

const Box = styled.div`
  width: 300px;
  height: 350px;
  background-color: white;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px 5px;
`;

const BoxHold = styled.div`
  width: 80%;
  /* background-color: purple; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

const TextHold = styled.div``;

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
