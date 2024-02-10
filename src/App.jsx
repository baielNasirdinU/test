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
  console.log(data);
  return (
    <div>
 
<div className="wrapper">
  {
    data.map((item)=>(
      <div className="">
    <h2>{ item.name}</h2>
<img src={item.url} alt={item.name} />
      </div>
    ))
  }


</div>

      <button onClick={()=>handleClick}>sda</button>
    </div>
  )
}

export default App