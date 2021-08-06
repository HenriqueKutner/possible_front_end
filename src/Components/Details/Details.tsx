import React, { FC, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { DetailsContainer, BackPage, Card, CardText } from './Details.styles';
import { Link } from "react-router-dom"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

// interface Country {
//   name: string;
//   population: number,
//   region: string,
//   capital: string,
//   flag: string,
//   nativeName: string,
//   subRegion: string,
//   topLevelDomain: string,
//   currencies: string,
//   languages: string,
//   borders: string
// }

interface Props {
  theme: string
}


export const Details: React.FC<Props> = ({theme}) => {

  const { name } = useParams<string>();
  const [country, setCountry] = useState<string | number | any>()

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
          <h4 style={{color:theme == "dark" ? "white" : "black"}}><KeyboardBackspaceIcon /></h4></Link>
          <p style={{color:theme == "dark" ? "white" : "black"}}>Back</p>        
      </BackPage>
      
      {country &&
        country.map((e) => (
          <Card key={e.name}>
            <img src={e.flag}/>
            <CardText color={color}>
              <div>
                <h3>{e.nativeName}</h3>
                <p><strong>Population:</strong> {e.population}</p>
                <p><strong>Region:</strong>  {e.region}</p>
                <p><strong>Sub Region:</strong>  {e.subregion}</p>
                <p><strong>Capital:</strong>  {e.capital}</p>
                <p><strong>Border Countries:</strong> {e.borders + ","}</p>
              </div>
              <div>
                <p><strong>Top Love</strong>  Domain: {e.topLevelDomain}</p>
                <p><strong>Currencies:</strong>  {e.currencies.map((r) => r.name)}</p>
                <p><strong>Languages:</strong> {e.languages.map((r) => r.nativeName + ", ")}</p>
              </div>
            </CardText>
          </Card>
          
        )) 
      }
      
    </DetailsContainer>
  )
}