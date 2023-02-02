// import React from "react";
// import styled from "styled-components";
// import HeaderT from "./HeaderT";
// import one from "../assests/1.jpg";
// import two from "../assests/2.jpg";

// const HeroT = () => {
//   return (
//     <div>
//       <HeaderT />
//       <Container>
//         <Wrapper>
//           <Div1>
//             <h1>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Accusantium!
//             </h1>
//             <p>
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Consequatur cumque enim ratione, molestias quod ad distinctio iure
//               odit impedit eius omnis? Vel, blanditiis aliquam!
//             </p>
//             <button>View Catalog</button>
//           </Div1>
//           <Div2>
//             <One>
//               <img src={one} alt="" />
//             </One>
//             <Two>
//               <img src={two} alt="" />
//             </Two>
//           </Div2>
//         </Wrapper>
//       </Container>
//     </div>
//   );
// };

// export default HeroT;

// const Wrapper = styled.div`
//   width: 80%;

//   height: 400px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const One = styled.div`
//   width: 250px;
//   height: 300px;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// const Two = styled.div`
//   width: 250px;
//   height: 300px;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;
// const Div2 = styled.div`
//   display: flex;
// `;

// const Div1 = styled.div`
//   width: 600px;
//   height: 300px;
//   /* background-color: yellow; */
//   text-align: left;
// `;

// const Container = styled.div`
//   background-image: linear-gradient(#d86479, #f8f8f8);
//   width: 100%;
//   height: 400px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* justify-content: space-between; */
//   /* flex-wrap: wrap; */
// `;

import React from "react";
import styled from "styled-components";
import one from "../assests/1.jpg";
import two from "../assests/2.jpg";
import HeaderT from "./HeaderT";
// import mine from "../assests/gif3.jfif"

const HeroT = () => {
  return (
    <div>
      <Holder>
      {/* <HeaderT /> */}
      <Container>
        <Wrapper>
          <DivOne>
            <TextHold>
              <TextOne>
                Lorem ipsum dolor sit <br /> amet consectetur <br /> adipisicing
                elit.
              </TextOne>
              <Des>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, dolorum! Ipsum hic mollitia impedit est sed sunt
                neque libero possimus.
              </Des>
            </TextHold>
            <button>
              <p>getting started</p>
            </button>
          </DivOne>
          <DivTwo>
            <Bg src={two} />
            {/* <Bg1 src={one} /> */}
          </DivTwo>
        </Wrapper>
      </Container>
      </Holder>

    </div>
  );
};

export default HeroT;

const Holder = styled.div`
    width: 100%;

  background-color: #f1f1f1;
`



const Bg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 960px) {
    
  }
`;

const TextHold = styled.div`
  text-align: left;
  z-index: 1;
  @media screen and (max-width: 500px) {
 width: 300px;
}
`;

const TextOne = styled.h1`
  color: black;
  font-size: 40px;
  margin: 0;
  z-index: 1;

  @media screen and (max-width: 500px) {
 width: 300px;
}
`;
const Des = styled.p`
  width: 450px;
  font-size: 18px;
  color: black;

  @media screen and (max-width: 425px) {
    width: 300px;
   
  }
`;

const DivOne = styled.div`
color: black;
  button {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 250px;
    height: 50px;
    background-color: white;
    color: #ff0077;
    cursor: pointer;
    font-weight: bold;
    transition: all ease-in-out 400ms;

    border-radius: 10px;
    border: 1px solid black;

    color: black;
  }
`;

const DivTwo = styled.div`
  width: 500px;
  height: 400px;
  display: flex;

  @media screen and (max-width: 960px) {
    width: 270px;
    height: 200px;
   
  }
`;

const Wrapper = styled.div`
  width: 80%;
  /* height: 500px; */

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 40px;
  padding-bottom: 30px;

  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
`;
