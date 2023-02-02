import React from "react"
import styled from "styled-components"
import pic from "../assests/six.jpg"

const Hero2 :React.FC =() =>{
    return(
        <div>
            <Container>
<Left>
    <h3>STAND OUT</h3>
    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
    <button>SHOP NOW</button>
</Left>
            </Container>
        </div>
    )
}

export default Hero2

const Left = styled.div`
    z-index: 1;
    h3{
        z-index: 1;
        color :white ;
    }
    h1{
        z-index: 1;
        color :white ;
    }
    button{
        z-index: 1;
        color :white ;
    }
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