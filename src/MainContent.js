import React from 'react'
import memedata from './memedata'

export default function MainContent(){

    const [meme, setMeme] = React.useState({
        top_text: "",
        bottom_text: "",
        random_img: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemes, setAllMemes] = React.useState([])


    React.useEffect(() =>{
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },[])

    console.log(allMemes)

    
    function GetMemeImg(){
        const randomNumber = Math.floor(Math.random()* allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevState => ({
            ...prevState,
            random_img:  url }))
    }    
    

    function handleOnChange(event){
            const{name, value} = event.target
            setMeme(prevMeme =>{
                return{
                    ...prevMeme,
                    [name]: value
                }
            })
    }


    return(
        <section className="main_content">
            <form className="main_form" action='#' method='get'>
                <span className="form_texts">
                    <input
                        className='form_text_top' 
                        type="text" 
                        name= 'top_text'
                        placeholder="Top text" 
                        value={meme.top_text}
                        onChange={handleOnChange} 
                    />
                    <input 
                        className='form_text_btm'
                        type="text"
                        name= 'bottom_text'
                        placeholder="Botton text" 
                        value={meme.bottom_text}
                        onChange={handleOnChange} 
                    />
                </span>
                <input 
                    className="form_button"
                    type="button" 
                    onClick={GetMemeImg} 
                    value="Get a new Meme image!" 
                />
            </form> 
            <div className="meme_picture">
                <img className="meme_img" src= {meme.random_img} alt="Meme" />
                <div classname = 'meme_texts'>
                    <p className = "meme_toptext"> {meme.top_text.toUpperCase()} </p>
                    <p className = "meme_topBottom">{meme.bottom_text.toUpperCase()}</p>
                </div>
            </div>    
        </section>
    )
}