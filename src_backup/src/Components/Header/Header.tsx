import React, { FC, useState, useEffect } from 'react'
import { HeaderContainer, SubWrapper } from './Header.styles'
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import { CardText } from '../Main/Main.styles';


export const Header: React.FC = () => {
  const [theme, setTheme] = useState<string>(() => {
    const localData = localStorage.getItem('theme');
    return localData ? JSON.parse(localData) : [];
  })


  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  },[theme])

  const darkMode = () => {
    if(theme == "day"){
      setTheme("dark")
      window.location.reload(true);
      
    }else {
      setTheme("day")
      window.location.reload(true);
     
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
        <h3 onClick={darkMode}>Dark Mode</h3>
      </SubWrapper>

    </HeaderContainer>
    
  )
}
