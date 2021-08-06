import React, { FC, useState, useEffect } from 'react'
import { HeaderContainer, SubWrapper } from './Header.styles'
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import { CardText } from '../Main/Main.styles';

interface Props{
  theme: string;
  setTheme: any
}

export const Header: React.FC<Props> = ({theme, setTheme}) => {

  const darkMode = () => {
    if(theme == "day"){
      setTheme("dark") 
    }else {
      setTheme("day")
    }
  }

  let text:string;
  let backg:string;
  
  if(theme == "dark"){
    text = "white"
    backg = "hsl(209, 23%, 22%)"
  }else {
    text = "black"
    backg = "white"
  }

  return (
    <HeaderContainer color={text} backgroundColor={backg}>
      <h3>Where in the world?</h3>
      <SubWrapper>
        <NightsStayOutlinedIcon />
        <h4 onClick={darkMode}>Dark Mode</h4>
      </SubWrapper>
    </HeaderContainer>
    
  )
}
