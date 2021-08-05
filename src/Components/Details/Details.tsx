import React, { FC, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { DetailsContainer, BackPage, Card, CardText } from './Details.styles';
import { Link } from "react-router-dom"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

interface Country {
  name: string;
  population: number,
  region: string,
  capital: string,
  flag: string,
  nativeName: string,
  subRegion: string,
  topLevelDomain: string,
  currencies: string,
  languages: string,
  borders: string
}

interface Props {
  theme: string
}


export const Details: React.FC<Props> = ({theme}) => {

  const { name } = useParams<string>();
  const [country, setCountry] = useState<any>()

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setCountry(data);
    })
    },[])

  
  
    
  let color:string;
  let backMain:string;
  let colorBack:string;
  if(theme  == "dark"){
    color = "hsl(0, 0%, 100%)"
    colorBack = "hsl(0, 0%, 100%)"
    backMain = "hsl(207, 26%, 17%)"
  }else{
    color = "black"
    colorBack = "hsl(207, 26%, 17%)"
    backMain = "hsl(0, 0%, 95%)"
  }
  
  return(
    <DetailsContainer backMain={backMain}>
      <BackPage>
        <Link to="/">
          <h4><KeyboardBackspaceIcon /></h4></Link>
          <p>Back</p>        
      </BackPage>
      
      {country &&
        country.map((e) => (
          
            <Card key={e.name}>
              <img src={e.flag}/>
              <CardText color={color}>
                <h3>{e.nativeName}</h3>
                <p>Population: {e.population}</p>
                <p>Region:  {e.region}</p>
                <p>Sub Region:  {e.subregion}</p>
                <p>Capital:  {e.capital}</p>
                <p>Top Love  Domain: {e.topLevelDomain}</p>
                <p>Currencies:  {e.currencies.map((r) => r.name)}</p>
                <p>Languages: {e.languages.map((r) => r.nativeName)}</p>
                <p>Border Countries:{e.borders}</p>
              </CardText>
            </Card>
          
        )) 
      }
      
    </DetailsContainer>
  )
}