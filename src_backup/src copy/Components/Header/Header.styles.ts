import styled from 'styled-components'

export const HeaderContainer = styled.div `

  @media screen and (max-width: 812px) {
    width: 100%;
    height: 70px;
    display: flex;
    color: ${(props) => props.color};
    font-size: 14px;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.backgroundColor};
  }

  
    width: 100%;
    height: 70px;
    display: flex;
    color: ${(props) => props.color};
    font-size: 14px;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.backgroundColor};
  
`
  

export const SubWrapper = styled.div `
  height: 50px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor:pointer;

  h3 {
    padding-left: 10px;
  }

`