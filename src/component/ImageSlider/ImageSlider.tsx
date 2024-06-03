import style from './Image.module.scss'
import { ImageSliderProps } from './ImageSliderProps';
import { useEffect, useState } from 'react'
const ImageSlider=({url,limit=5,page=1}:ImageSliderProps)=>{
    const [img,setImg] =useState([]);
    const [currentSlide,setCirrentSlide] = useState(0);
    const [errorMsg,setErrorMsg] = useState(null)
    const [loading,setLoading] = useState(false);

    async function fetchImages(getUrl:any){
        try{
            setLoading(true);
            const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
            const data = await response.json();
            if(data){
                setImg(data)
                setLoading(false);
            }
        } catch(e:any){
            setErrorMsg(e.message);
        }
    }
    useEffect(()=>{
        if(url !== '') fetchImages(url)
    },[url]);
    console.log(img);
    if(loading){
        return <p>Loading data</p>
    }
    if(errorMsg !== null){
        return <p>error occured! {errorMsg}</p>
    }
    return(
        <div>

        </div>
    )
}
export default ImageSlider