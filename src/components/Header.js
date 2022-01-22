import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="../images/troll-face.png" 
                className="header--image" alt=""
            />
            <h2 className="header--title">Memes</h2>
            <h4 className="header--project">Hademath build meme</h4>
        </header>
    )
}