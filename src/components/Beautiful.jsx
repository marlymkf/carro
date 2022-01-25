import React from "react";
import './Beautiful.css';
import Button from "./Button";
const Beautiful = () => {
    return (
        <div className="tell justify-center align-center">
            <h1>Beautiful Doodles to Tell Your Story</h1>
            <p className="texto">Beautiful Doodles to Tell Your Story</p>
            <div className="but flex justify-center ">
                <Button className="botao"> Download</Button>
                <Button className="botao--branco">Sign In</Button>

            </div>
            <img className="carro-1"
                src="img/Beep Beep Drifting.png"
                alt="carro"
                width="720"
                height="353"
            />
        </div>

    )
}
export default Beautiful;