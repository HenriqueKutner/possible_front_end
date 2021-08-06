import styled from 'styled-components'

export const MainContainer = styled.div `
  width: 100%;
  background-color: ${(props) => props.backgroundMain};
  font-size: 16px;
`

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 180px;
  padding-top:55px;
  
  input{
    width: 35%;
    height: 55px;
    margin-bottom: 5px;
    font-size:18px;
    padding-left:15px;
    border:none;
  }

  select{
      width: 20%;
      height: 55px;
      font-size:18px;
      padding-left:15px;
      border:none;
    }




  @media screen and (max-width: 812px) {
    width: 100%;
    text-align: center;
    display:flex;
    flex-wrap:wrap;
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
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  
`

export const Card = styled.div `

  width: 21%;
  background-color:${(props) => props.backCard};
  margin-bottom: 35px;
  margin-right:12px;
    
  img {
    width:  100%;
    height: 55%;
    object-fit: cover;
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



