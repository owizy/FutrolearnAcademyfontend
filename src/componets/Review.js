import reviewData from "../utils/ReviewData"
import { useState,useEffect } from "react"
import "./Review.css"
import leftarrow from "../image7/icons8_left_96px_1.png"
import rightarr from "../image7/icons8_right_96px.png"
export default function Review(){
    const [people] = useState(reviewData)
    const [value, setValue] = useState(0)

    useEffect(()=>{
        let lastIndex = people.length-1
        if(value < 0){
            setValue(lastIndex)
        }

        if(value > lastIndex){
            setValue(0)
        }
    },[value, people])

    useEffect(()=>{
        let myInterval = setInterval(()=>{
            setValue(value + 1)
        },8000)

        return(()=>{
            clearInterval(myInterval)
        })
    },[value])

    return(
        <div className="slider_div">
            {people.map((person, index)=>{
                const {id, image, name, title, quote} = person
                let position = 'leftSlide'
                if(value === index){
                    position = 'activeSlide'
                }

                if(index === value-1 || (value === 0 && index === people.length-1)){
                    position = 'lastSlide'
                }

                return(
                    <article key={id} className={position}>
                        <img src={image} alt={name} />
                        <h4 className="review_name">{name}</h4>
                        <h5 className="review_add">{title}</h5>
                        <p className="review_text">{quote}</p>
                    </article>
                )
            })}

            <button onClick={()=> setValue(value - 1)}><img src={leftarrow} width={30}/></button>
            <button onClick={()=> setValue(value + 1)}><img src={rightarr} width={30}/></button>
        </div>
    )
}