import React, { FC, useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { MainContainer, Card, SearchWrapper, CardText, CardWrapper } from './Main.styles'
import SearchIcon from '@material-ui/icons/Search';

// interface Country {
//   name: string,
//   population: number,
//   region: string,
//   capital: string,
//   flag: string
// }

interface Props {
  theme: string
}


export const Main: React.FC<Props> = ({theme}) => {

  const [country, setCountry] = useState<string | number | any>()
  const [name, setName] = useState<string>()

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => {
      return res.json();
    })  
    .then(data => {
        setCountry(data)
    })
    },[])
    
    const searchName = () => {
      fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.status)
        if(data.status == 404){
          setCountry("")
          // alert("This country doesn't exist")
        }else{
          setCountry(data)
        }
        
        
        
      })
    }
    
    const searchRegion = (region:string) => {
      fetch(`https://restcountries.eu/rest/v2/region/${region}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCountry(data)
      })
    }

  const regionWorld:string[] = ["Europe", "Asia", "Africa", "Americas"]
  
  
  let color:string;
  let backgroundMain:string;
  let backCard:string
  let backInput:string
  if(theme  == "dark"){
    color = "hsl(0, 0%, 100%)"
    backgroundMain = "hsl(207, 26%, 17%)"
    backCard = "hsl(209, 23%, 22%)"
    backInput = "hsl(209, 23%, 22%)"
  }else{
    color = "black"
    backgroundMain = "hsl(0, 0%, 95%)"
    backCard = "white"
    backInput = "white"
  }

  return (
    <MainContainer backgroundMain={backgroundMain}>
      <SearchWrapper>
        <input 
          placeholder="Search for a country..." 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyUp={searchName}
          
        /><br/>
        <select onChange={(e) => searchRegion(e.target.value)} >
          <option value="" selected disabled hidden>Filter by Region</option>
          {regionWorld.map((e) => (<option value={e}>{e}</option>))}
        </select>
      </SearchWrapper>
      <CardWrapper>
        {country && 
          country.map((e) => (
            <Card key={e.name} backCard={backCard}>
              <Link to={`/Details/${e.name}`}><img src={e.flag}/></Link>
              <CardText color={color} >
                <h3>{e.name}</h3>
                <p><strong>Population:</strong> {e.population}</p>
                <p><strong>Region:</strong> {e.region}</p>
                <p><strong>Capital:</strong> {e.capital}</p>
              </CardText>
            </Card>
          )) 
        }
      </CardWrapper>
    
    </MainContainer>    
  )
}


