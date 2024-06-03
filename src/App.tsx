import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.module.scss'
import Accordian from './component/Accordian/index'
import RandomColorGenerator from './component/RandomColorGenerator/RandomColorGeneraor'
import StarRating from './component/StarRating/StarRating'
import ImageSlider from './component/ImageSlider/ImageSlider'

function App() {

  return (
    <div>
    {/* <Accordian/> */}
    {/* <RandomColorGenerator/> */}
    {/* <StarRating noOfStars={5}/> */}
    <ImageSlider url={'https://picsum.photos/v2/list'} limit={10}/>
    </div>
  )
}

export default App
