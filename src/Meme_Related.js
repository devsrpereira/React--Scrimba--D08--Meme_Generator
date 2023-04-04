import React from 'react'
import memedata from './memedata'
import MainContent from './MainContent'

export default function Meme_Related(){

    const memesArray = memedata.data.memes
    const randomNumber = Math.floor(Math.random()*memesArray.length)
    let url = "http://i.imgflip.com/1bij.jpg"
    const text_top = "Top Text"
    const text_btm = "Bottom Text"

    const [image, setImage] = React.useState(url)

    // const text_top = document.querySelector("#form_text_top")

    console.log(text_top)

    
   return(
        <div className="meme_picture">
            <p className = "meme_toptext"> {text_top} </p>
            <img className="meme_img" src= {image}></img>
            <p className = "meme_topBottom">{text_btm}</p>
        </div>
    )
}