import React from 'react'

function Article({title, date = "January 1, 1970", preview, minutes}){
    let emojis = ''
    if(minutes < 30){
        for(let i = 0; i < Math.ceil(minutes/5); i++){
            emojis += '☕️'
        }
    }else{
        for(let i = 0; i < Math.ceil(minutes/10); i++){
            emojis += '🍱'
        }
    }
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{emojis}</p>
            <p>{preview}</p>
        </article>
    )
}

export default Article