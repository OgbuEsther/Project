import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pic from "../assests/logo.jpg";
import {AiFillEye ,AiOutlineMenu ,AiOutlineMenuUnfold ,AiOutlineMenuFold} from "react-icons/ai"
import DropDown from "./DropDown";
const HeaderT = () => {
const [show , setShow ] = React.useState(false)

const toggle = () =>{
  setShow(!show) 
}

  return (
    <div>
      <Container>
        <Wrapper>
          <DivOne>
            {/* <img src={pic} alt="logo" /> */}
            <h1>Beauty</h1>
           
          </DivOne>
          <DivTwo>
            <NavBars style={{textDecoration : "none" , color: "black"}}>
              <Link style={{textDecoration : "none" ,color: "black"}}  to="/">
               <h4>Home</h4>
              </Link>
              <Link style={{textDecoration : "none" ,color: "black"}} to="/catalog">
                <h4>Catalog</h4>
              </Link>
              <Link style={{textDecoration : "none" ,color: "black"}} to="/contact">
                <h4>Contact</h4>
              </Link>
            </NavBars>
          </DivTwo>
          <DivThree>
          <Button bg = "white" bd = "1px solid black" col = "black" bgh = " #00b7ff" colh = "white" to = "/signup">Sign Up</Button>
          <Button bg = "black" bd = "1px solid black" col = "white" bgh = "gray" colh = "black"  to = "/signin">Sign in</Button>
          </DivThree>

          <DivFour>
            <AiOutlineMenu onClick={toggle} />
          </DivFour>
      {
        show ?     <DropDown /> : null
      }
        </Wrapper>
      </Container>
    </div>
    
  );
};

export default HeaderT;

const DivFour = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`


const Button = styled(Link)<{bg : string , bd : string , col: string , bgh: string , colh : string}>`
  cursor: pointer;
  transition: all 400ms ease-in-out;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background-color: ${(props) => props.bg};
  border: ${(props)=> props.bd};
  color : ${(props) => props.col};
  margin-right: 10px;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;


  :hover {
    background-color: ${(props) => props.bgh};
    color:  ${(props)=> props.colh};
  }

`


const NavBars = styled.div`
display: flex;
justify-content: space-between;
width: 250px;
text-decoration: none;

h4{
  color: black;
cursor: pointer;
transition: all 400ms ease-in-out;


:hover{
  transform: scale(0.99);
  color: #00b7ff;
}
}

@media screen and (max-width: 500px) {
  display: none;
}

`

const DivThree = styled.div`
display: flex;
@media screen and (max-width: 500px) {
  display: none;
}

`


const DivTwo = styled.div`
display: flex;

`

const DivOne = styled.div`
display: flex;
`

const Wrapper = styled.div`
width: 90%;
height: 50px;
/* background-color: blue; */
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 50px;
background-color:white ;
display: flex;
justify-content: center;
align-items: center;
position: relative;
position: fixed;


`