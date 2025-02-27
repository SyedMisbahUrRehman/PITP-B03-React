import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [fact, setFact] = useState('')
  const [image, setImage] = useState(null)
  const getCatFact = async()=>{
    const response = await fetch("https://catfact.ninja/fact")
    const data = await response.json()
    setFact(data?.fact)


  }
  const getCatImage = async()=>{
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=1")
    const data = await response.json()
    setImage(data[0].url)
    // console.log(data[0].url);


  }
  useEffect(()=>{
    getCatFact()
    getCatImage()
  },[])
  console.log(image);
  return (
    <>
    <img src={image} alt="catoo" height={"50%"}/>
    <p>{fact}</p>
    </>
  )
}

export default App
