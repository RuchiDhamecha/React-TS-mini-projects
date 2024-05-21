import { useState } from "react";
import data from './data';
import style from './styles.module.scss';

export default function Accordian(){
    const [selected , setSelected]= useState(null);

    function handleSingleSelection(getCurrentId:any){
        // console.log(getCurrentId);
        setSelected(getCurrentId);
    }
    console.log(selected)
    return(
        <div className={style.wrapper}>
            <button>Enable multi selection</button>
            <div className={style.accordian}>
                {
                    data && data.length > 0 ?(
                    data.map((dataItem) =>( 
                    <div className={style.item}>
                        <div onClick={()=> handleSingleSelection(dataItem.id)} className={style.title}>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === dataItem.id ? 
                            <div className={style.content}>{dataItem.answer}</div>
                            : null
                        }
                    </div>
                    ))

                ):(
                <div>Nod data found</div>
                )}
            </div>

        </div>
    ) 
}
