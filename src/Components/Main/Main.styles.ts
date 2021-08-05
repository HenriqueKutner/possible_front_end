import styled from 'styled-components'

export const MainContainer = styled.div `
  width: 100%;
  background-color: ${(props) => props.backgroundMain};
  font-size: 16px;

`

export const SearchWrapper = styled.div`

@media screen and (min-width: 800px){
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 100px;
  padding-top:25px;
  
  input{
      width: 20%;
      height: 40px;
      margin-bottom: 5px;
      font:20px;
  }

  select{
      width: 20%;
      height: 40px;
    }
}



  @media screen and (max-width: 812px) {
    width: 100%;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;

    input{
      width: 95%;
      height: 40px;
      margin-bottom: 5px;
      border-color:transparent;
      background: ${(props) => props.backInput};
    }

    select{
      width: 95%;
      height: 40px;
      border-color:transparent;
    }

  }
`

export const CardWrapper = styled.div`
 
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  
  justify-content:center;
`

export const Card = styled.div `

    width: 30%;
   
    margin-bottom: 5px;
    
    
    img {
      width: 100%;
      height:auto;
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
`



