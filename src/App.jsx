import React, { useEffect, useState } from 'react'

const App = () => {

  const [data,setData]=useState([])
  const api=' https://pokeapi.co/api/v2/pokemon/ '

  const handleClick=async (e)=>{
    
fetch(api)
.then((data)=>{
    return data.json()
})
.then((data)=>{
    setData(data.results);
})
.catch((err)=>{
    console.log(err);
})
    
  }
  useEffect(()=>{
   handleClick()
    


  },[])
  return (
    <div>
  <div className="">
  {
        data.map((item)=>{
          <h1 key={item.id}>
            {item.name}
            <div className="">
              {item.name}
            </div>
          </h1>

      })
      }
  </div>
<div className="wrapper">


</div>

      <button onClick={()=>handleClick}>sda</button>
    </div>
  )
}

export default App