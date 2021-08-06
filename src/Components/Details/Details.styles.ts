import styled from 'styled-components'

export const DetailsContainer = styled.div `

  @media screen and (min-width: 1000px){
    width: 100%;
    height:100vh;
    font-size:16px;
    background-color: ${(props) => props.backMain};
  }

  @media screen and (max-width: 800px){
    width: 100%;
    height:100vh;
    background-color: ${(props) => props.backMain};
  }
`

export const BackPage = styled.div `

  padding:20px;
  display: flex;
  
  h4 {
    color:black;
  }

  p{
    margin-left: 15px;
    margin-top:1px; 
  }
  


`

export const CardWrapper = styled.div`
 @media screen and (min-width: 1000px){
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  
  
 }
`

export const Card = styled.div `

  @media screen and (min-width: 1000px){
    width: 100%;
    margin-bottom: 5px;
    display:flex;
    justify-content: center;
    img {
      width: 30%;
   
    }
  }

  @media screen and (max-width: 812px){
    width: 95%;
    background-color: ${(props) => props.backCard};
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
    margin-bottom:15px;
    margin-top:5px;

    img {
      width: 100%;
    }
  }
  
`

export const CardText = styled.div `

  @media screen and (min-width: 1000px){
    width:50%;
    color: ${(props) => props.color};
    padding:15px;
    padding-left: 22px;
    
    margin-left:50px;
    display:flex;
    
    h3{
      margin-bottom:7px;
      font-weight:800;
      font-size:40px;
    }

    p{
      margin-bottom:5px;
      font-size: 12px;
    }

    div p{
      font-size:16px;
      padding-top:20px;
    }

    div:last-child{
      
      padding-top:60px;
      padding-left:30px;
    }
  }

  @media screen and (max-width:800px){
        text-align: left;
      color: ${(props) => props.color};
      padding:15px;
      padding-left: 22px;
      
      h3{
        margin-bottom:7px;
      }

      p{
        margin-bottom:5px;
        font-size: 12px;
      }
  

  }
`


