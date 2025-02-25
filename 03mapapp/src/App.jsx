import { useState } from 'react'
import './App.css'
import Card from './Card';
import MyButton from './MyButton';

function App() {

  const data = [
    { title: 'Majestic Mountains', subtitle: 'Snow-capped Peaks', description: 'Towering mountains with pristine snow, offering breathtaking views and serene landscapes.' },
    { title: 'Lush Green Forests', subtitle: 'Dense and Vibrant', description: 'A vast expanse of greenery filled with diverse flora and fauna, creating a peaceful sanctuary.' },
    { title: 'Crystal Clear Rivers', subtitle: 'Flowing with Purity', description: 'Gentle rivers winding through valleys, their crystal-clear waters reflecting the beauty of nature.' },
    { title: 'Golden Sunsets', subtitle: 'A Painter’s Dream', description: 'The sky painted in hues of orange and pink as the sun sets, casting a magical glow over the horizon.' },
    { title: 'Blooming Wildflowers', subtitle: 'Nature’s Color Palette', description: 'Fields of wildflowers in full bloom, splashing vibrant colors across the meadows.' }
  ];
  const showHello = () => {
    alert('Hello!')
  }
  const showBye = () => {
    alert('Bye!')
  }

  return (
    <div>
    {/* {data.map((ele,i)=>(

      <Card data={ele} key={i}/>
    ))} */}
    {/* <MyButton label={"Hello"} fn={showHello}/>
    <MyButton label={"Bye"} fn={showBye}/> */}
    <MyButton>
      Show this label
    </MyButton>
    </div>
  )
}

export default App
