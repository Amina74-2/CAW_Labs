import React, { useState } from 'react';

function DisplayTab({ table }) {
    // État pour gérer les éléments du tableau
    const [items, setItems] = useState(table);

    // Fonction pour supprimer un élément au clic
    const handleRemove = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index} onClick={() => handleRemove(index)}>
                    Element {index + 1} is: {item}
                </li>
            ))}
        </ul>
    );
}

function Exercise2() {
    // Deux tableaux à afficher
    const table1 = ["hello", "world", "from", "react"];
    const table2 = ["apple", "banana", "cherry", "date"];

    return (
        <div>
            <h2>Exercice 2</h2>
            <h3>Tableau 1</h3>
            <DisplayTab table={table1} />

            <h3>Tableau 2</h3>
            <DisplayTab table={table2} />
        </div>
    );
}

export default Exercise2;
