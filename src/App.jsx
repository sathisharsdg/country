import React, { useEffect, useState } from 'react'

function App() {
  const [country,setCountry] = useState([]);
  const [search,setSearch] = useState("");

  useEffect(()=>{
      fetch("https://restcountries.com/v3.1/all").then((res)=>{
          return res.json()
      }).then((data)=>{
          setCountry(data);
          console.log(data);
          
      })
  },[])
  return (
    <div>
         <div className="container">
            <div className="row">
              <input type="text"  placeholder='enter continent name...' onChange={e=>setSearch(e.target.value)}/>
                 {
                     country.filter((data)=>{
                       // return data.population < 50
                      return search.toLowerCase() === "" ? data : data.name.common.toLowerCase().includes(search)
                     }).map((country,i)=>{
                        return(
                           <div className='col-md-3 border border-bottom-3 mb-3 mt-3' key={i}>
                               <h6>Country Name:{country.name.common}</h6>
                               <img src={country.flags.png} alt=""  className='img-fluid customimg'/>
                               <p>Continent Name: {country.continents}</p>
                               <p>Population: <b>{country.population}</b></p>

                           </div>
                        )
                     })
                 }
            </div>
         </div>
    </div>
  )
}

export default App
