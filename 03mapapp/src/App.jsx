import { useState } from 'react'
import './App.css'

function App() {
  // const [data,setData]=useState({
  //   title:"Hello title",
  //   subtitle:"Hello subtitle",
  //   description:"Hello description"
  // })
  const data = [
    { title: 'Majestic Mountains', subtitle: 'Snow-capped Peaks', description: 'Towering mountains with pristine snow, offering breathtaking views and serene landscapes.' },
    { title: 'Lush Green Forests', subtitle: 'Dense and Vibrant', description: 'A vast expanse of greenery filled with diverse flora and fauna, creating a peaceful sanctuary.' },
    { title: 'Crystal Clear Rivers', subtitle: 'Flowing with Purity', description: 'Gentle rivers winding through valleys, their crystal-clear waters reflecting the beauty of nature.' },
    { title: 'Golden Sunsets', subtitle: 'A Painter’s Dream', description: 'The sky painted in hues of orange and pink as the sun sets, casting a magical glow over the horizon.' },
    { title: 'Blooming Wildflowers', subtitle: 'Nature’s Color Palette', description: 'Fields of wildflowers in full bloom, splashing vibrant colors across the meadows.' }
];

 
  return (  
    <>
    {data.map((ele,index)=> (
        <div className="Card" key={index}>
<h1>{ele.title}</h1>
<h3>{ele.subtitle}</h3>
<p>{ele.description}</p>
      </div>
      ))}
     
</>
  )
}

export default App
