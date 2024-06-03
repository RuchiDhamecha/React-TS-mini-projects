import { FaStar } from 'react-icons/fa'
import style from './StarRating.module.scss'
import { StarRatingProps } from './StarRatingProps.types'
import { useState } from 'react'

const StarRating=({noOfStars}:StarRatingProps)=>{
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);
    function handleClick(getCurrentIndex:any){
        console.log(getCurrentIndex);
        setRating(getCurrentIndex);
    }
    function handleMouseEnter(getCurrentIndex:any){
        setHover(getCurrentIndex)
    }
    function handleMouseLeave(){
        setHover(rating)
    }

    return(
        <div className={style.StarRating}>{
            [...Array(noOfStars)].map((_,index)=>{
                index+=1;
                return (
                <FaStar 
                key={index}
                className={index <= (hover ||  rating)? `${style.Active}`:`${style.InActive}`}
                onClick={()=>handleClick(index)}
                onMouseMove={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave}
                size={30}
                />
            )})
        }</div>
    )
}
export default StarRating