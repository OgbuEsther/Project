import React from "react";
import styled from "styled-components";
import one from "../assests/one.jpg";
import two from "../assests/two.jpg";
import three from "../assests/three.jpg";
import four from "../assests/four.jpg";
import five from "../assests/five.jpg";
import six from "../assests/six.jpg";
import seven from "../assests/seven.jpg";
import eight from "../assests/eight.jpg";

const AboutHer = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Div1>
            <Images>
              <ImgOne>
                <img src={one} alt="" />
              </ImgOne>
              <ImgTwo>
                {" "}
                <img src={two} alt="" />
              </ImgTwo>
              <ImgThree>
                {" "}
                <img src={three} alt="" />
              </ImgThree>
              <ImgFour>
                {" "}
                <img src={four} alt="" />
              </ImgFour>
            </Images>
          </Div1>
          <Div2>
            <TextHold>
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <h1>What you get as a customer</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                ducimus animi assumenda.
              </p>

              <Boxes>
                <BoxOne>
                  {" "}
                  <Hold1></Hold1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </BoxOne>
                <BoxTwo>
                  <Hold2></Hold2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                </BoxTwo>
              </Boxes>
              <Button>View Catalog</Button>
            </TextHold>
          </Div2>
        </Wrapper>
        {/* <Div3>
          <Images>
            <ImgOne>
              {" "}
              <img src={five} alt="" />
            </ImgOne>
            <ImgTwo>
              <img src={six} alt="" />
            </ImgTwo>
            <ImgThree>
              {" "}
              <img src={seven} alt="" />
            </ImgThree>
            <ImgFour>
              <img src={eight} alt="" />
            </ImgFour>
          </Images>
        </Div3> */}
      </Container>
    </div>
  );
};

export default AboutHer;

const Button = styled.div`
  width: 150px;
  height: 50px;
  background-color: #ff0077;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  font-weight: bold;
  transition: all ease-in-out 400ms;
  margin-top: 30px;

  :hover {
    transform: scale(0.97);
  }
`;

const Hold1 = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  margin-right: 20px;
`;
const Hold2 = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  margin-right: 20px;
`;

const BoxTwo = styled.div`
  display: flex;
  margin-top: 20px;
`;

const BoxOne = styled.div`
  display: flex;
`;

const Boxes = styled.div`
  /* display: flex; */
`;

const Div3 = styled.div``;

const ImgFour = styled.div`
  width: 250px;
  height: 150px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 425px) {
    width: 120px;
    margin: 0;
  }
`;
const ImgThree = styled.div`
  width: 250px;
  height: 150px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 425px) {
    width: 120px;
    margin: 0;
  }
`;
const ImgTwo = styled.div`
  width: 250px;
  height: 150px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 425px) {
    width: 120px;
    margin: 0;
  }
`;
const ImgOne = styled.div`
  background-color: blue;
  width: 250px;
  height: 150px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 425px) {
    width: 120px;
    margin: 0;
  }
`;

const TextHold = styled.div`
  /* text-align: left; */
  margin: 0;
  h3 {
    margin: 0;
  }
  h1 {
    margin: 0;
  }
  p {
    /* margin: 0; */
    margin-top: 0;
    margin-bottom: 8px;
  }
`;

const Images = styled.div`
  width: 500px;
  /* height: 300px; */
  /* background-color: rebeccapurple; */
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  margin-left: 30px;

  @media screen and (max-width: 425px) {
  width: 280px;
  margin: 0;
}
  
`;

const Div2 = styled.div`
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);

  /* background-color: red; */
  width: 500px;
`;

const Div1 = styled.div`
/* background-color: burlywood; */
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 425px) {
  width: 290px;
}

`;
const Wrapper = styled.div`
  width: 90%;


  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 40px;
  padding-bottom: 30px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
