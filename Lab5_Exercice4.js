import React, { useState } from 'react';

function Exercise4() {
    const [divs, setDivs] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const height = e.target.height.value;
        const width = e.target.width.value;
        const backgroundColor = e.target.backgroundColor.value;

        setDivs([...divs, { height, width, backgroundColor }]);
        e.target.reset();
    };

    return (
        <div>
            <h2>Exercice 4</h2>
            <form onSubmit={handleSubmit}>
                <input name="height" type="number" placeholder="Height" required />
                <input name="width" type="number" placeholder="Width" required />
                <input name="backgroundColor" type="text" placeholder="Color" required />
                <button type="submit">Add Div</button>
            </form>

            {divs.map((div, index) => (
                <div
                    key={index}
                    style={{
                        height: `${div.height}px`,
                        width: `${div.width}px`,
                        backgroundColor: div.backgroundColor,
                        margin: "10px",
                    }}
                ></div>
            ))}
        </div>
    );
}

export default Exercise4;
