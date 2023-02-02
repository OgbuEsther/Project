import React from "react";
import styled from "styled-components";
import HeaderT from "../PAGEONE/HeaderT";
import pic from "../assests/nine.jpg"
import pic2 from "../assests/logo.png"


const HeroCat :React.FC =() =>{
    return (
        <div>
            <Container>
                <HeaderT />
                <Wrapper>

                </Wrapper>
            </Container>
            <CardHold>
<Card>
    <img src={pic2} alt="" />
    </Card>
    <Title>lorem</Title>
    <Desc>Lorem ipsum dolor sit amet.</Desc>
    <Price>$29.00</Price>
</CardHold>
        </div>
    )
}

export default HeroCat

const Title = styled.div``

const Desc = styled.div``

const Price = styled.div``

const Card = styled.div`
width: 250px;

/* background-color: black; */

img{
width: 250px;
object-fit: cover;
}
`

const CardHold = styled.div`
width: 250px;

/* background-color: red; */
margin: 20px;
text-align: left;
`

const Container = styled.div`
    width: 100%;
    height: 400px;
    background-color: #f1f1f1;
    background-image: url(${pic});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: relative;
    background-attachment: fixed;
    backdrop-filter: blur(10px);
z-index: 1;
    ::before{
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        top: 0;
        backdrop-filter: blur(5px);
        right: 0;
    }
`
const Wrapper = styled.div`
`