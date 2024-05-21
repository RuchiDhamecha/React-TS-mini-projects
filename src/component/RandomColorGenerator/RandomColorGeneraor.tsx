import { useEffect, useState } from "react"
import style from './styles.module.scss'

const RandomColorGenerator=()=>{
    const [color,setColor]=useState('#000000');
    const [typeOfColor,setTypeOfColor] = useState('hex');

    function randomColorUtitlity(length:any){
        return Math.floor(Math.random()*length)
    }
    function handleCreateRandomHexColor(){
        const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = '#'
        for(let i=0;i<6;i++){
             hexColor += hex[randomColorUtitlity(hex.length)]
        } 
        setColor(hexColor)

    }
    function handleCreateRandomRgbColor(){
        const r = randomColorUtitlity(256)
        const g = randomColorUtitlity(256)
        const b = randomColorUtitlity(256)
        setColor(`rgb(${r},${g},${b})`)
    }
    useEffect(()=>{
        if(typeOfColor === 'rgb') handleCreateRandomRgbColor()
            else handleCreateRandomHexColor();
    },[typeOfColor])

    return(
        <div style={
            {
                width:"100vw",
                height:"100vh",
                background:color
            }
        }>
            <button onClick={()=>setTypeOfColor('hex')}>Hex Color </button>
            <button  onClick={()=>setTypeOfColor('rgb')}>RGB color </button>
            <button onClick={typeOfColor==='hex'?handleCreateRandomHexColor : handleCreateRandomRgbColor}>Random Color</button>
            <div>
                <h4>{color}</h4>
                <h4>{typeOfColor}</h4>
            </div>
        </div>
    )
}
export default RandomColorGenerator