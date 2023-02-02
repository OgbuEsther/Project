import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <First>
          <Res>Resolution</Res>
          <Pa>
            Maecenas pellentesque placerat <br /> quam, in finibus nisl
            tincidunt sed. <br />
            Aliquam magna augue, <br /> malesuada ut feugiat eget, cursus <br />{" "}
            eget felis.
          </Pa>
          <Hold>
            <Card>
              <BsFacebook />
            </Card>
            <Card>
              <AiOutlineInstagram />
            </Card>
            <Card>
              <AiOutlineTwitter />
            </Card>
          </Hold>
        </First>
        <Second>
          <Link>Our Link</Link>
          <Navs>Home</Navs>
          <Navs>About Us</Navs>
          <Navs>Services</Navs>
          <Navs>Team</Navs>
          <Navs>Blog</Navs>
        </Second>
        <Third>
          <Link>Our Services</Link>
          <Navs>Strategy & Research</Navs>
          <Navs>Web Development</Navs>
          <Navs>Web Solution</Navs>
          <Navs>Digital Marketing</Navs>
          <Navs>App Design</Navs>
        </Third>
        <Fourth>
          <Link>Other Links</Link>
          <Navs>FAQ</Navs>
          <Navs>Portfolio</Navs>
          <Navs>Privacy Policy</Navs>
          <Navs>
            Terms & <br /> Conditions
          </Navs>
          <Navs>Support</Navs>
        </Fourth>
        <Fifth>
          <Link>Contact Us</Link>
          <H>
            <Circle>
              <MdCall />
            </Circle>
            <Num>
              <D>+234-819-835-7462</D>
              <D>+234-801-123-0000</D>
            </Num>
          </H>
          <H>
            <Circle>
              <MdEmail />
            </Circle>
            <Num>
              <D>info@desinic.com</D>
              <D>help@desinic.com</D>
            </Num>
          </H>
          <H>
            <Circle>
              <MdLocationPin />
            </Circle>
            <Num>
              <D>Pontiac, Michigan, United</D>
              <D>States of America</D>
            </Num>
          </H>
        </Fifth>
      </Wrapper>
      <Last>© 2022 TechSis. All Right Reserved</Last>
    </Container>
  );
};

export default Footer;
const Last = styled.div`
  width: 100%;
  height: 80px;
  background-color: #111941;

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const D = styled.div`
  color: white;
`;
const Num = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const Circle = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    90deg,
    hsl(335, 87%, 51%),
    hsl(29, 99%, 67%)
  );
  border-radius: 50px;
  color: white;
  font-size: 20px;
`;
const H = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 15px;
`;
const Fifth = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  margin-left: 70px;
`;
const Fourth = styled.div`
  width: 150px;
  height: 250px;
  display: flex;
  flex-direction: column;
  margin-left: 90px;
`;
const Third = styled.div`
  width: 170px;
  height: 250px;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;
const Navs = styled.div`
  color: white;
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    border-bottom: 1px solid white;
    color: silver;
  }
`;
const Link = styled.h2`
  color: white;
`;
const Second = styled.div`
  width: 150px;
  height: 250px;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;
const Hold = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
`;
const Card = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  color: #ef1f76;
  font-size: 22px;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  :hover {
    background: none;
    color: white;
  }
`;
const Pa = styled.div``;
const Res = styled.h2`
  color: white;
`;
const First = styled.div`
  width: 300px;
  display: flex;
  height: 100%;
  flex-direction: column;
  color: white;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  height: 320px;
`;
const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  /* background-color: #3c2371; */
  background-color: deeppink;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  flex-wrap: wrap;
`;
