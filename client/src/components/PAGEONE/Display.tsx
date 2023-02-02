import React from "react";
import styled from "styled-components";
import one from "../assests/1.jpg"
import two from "../assests/2.jpg"
import three from "../assests/one.jpg"


const Display : React.FC =() =>{
    return(
        <div>
            <Container>
               <h1> WHAT YOU GET AS A CUSTOMER</h1>
                <Wrapper>
                    <Image>
                        <img src={one} alt="head gear" />
                       
                        
                    </Image>
                    <Image>
                    <img src={two} alt="head gear" />
                    </Image>
                    <Image>
                        
                        
                    <img src={three} alt="head gear" />
                    </Image>
                    <Image>
                        
                        
                    <img src={three} alt="head gear" />
                    </Image>
                    <Image>
                        
                        
                    <img src={three} alt="head gear" />
                    </Image>
                    <Image>
                        
                        
                    <img src={three} alt="head gear" />
                    </Image>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Display


const Container = styled.div`
width: 100%;
/* height: 500px; */
background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h1{
      @media screen and (max-width: 500px) {
 width: 300px;
 font-size: 20px;
}
}

`

const Wrapper = styled.div`
width: 80%;
/* height: 500px; */
background-color: #f4f4f4;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
display: grid;
grid-gap: 20px;

grid-template-columns: repeat(3 , 1fr);

@media screen and (max-width: 500px) {
    width: 300px;
    grid-gap: 0;
}

`

const Image = styled.div`
width: 100px;

img{
    width: 100%;
    object-fit: cover;
}

`