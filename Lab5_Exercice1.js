import React, { useState } from 'react';

function Exercise1() {
    const [clicked, setClicked] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [clickedButton, setClickedButton] = useState("");
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Exercice 1</h2>

            {/* Bouton ClickMe */}
            <div>
                <button onClick={() => setClicked(true)}>ClickMe</button>
                {clicked && <p>Clicked</p>}
            </div>

            {/* Bouton Toggle */}
            <div>
                <button onClick={() => setToggle(!toggle)}>Toggle</button>
                <p>{toggle ? "Clicked" : "Not Clicked"}</p>
            </div>

            {/* Trois boutons */}
            <div>
                <button onClick={() => setClickedButton("Button 1")}>Button 1</button>
                <button onClick={() => setClickedButton("Button 2")}>Button 2</button>
                <button onClick={() => setClickedButton("Button 3")}>Button 3</button>
                <p>{clickedButton && `${clickedButton} was clicked`}</p>
            </div>

            {/* Compteur */}
            <div>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>Inc</button>
                <button onClick={() => setCount(count - 1)}>Dec</button>
            </div>
        </div>
    );
}

export default Exercise1;
