import React, { useState } from 'react';

function Exercise3() {
    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        setUsers([...users, username]);
        e.target.reset();
    };

    const deleteUser = (index) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Exercice 3</h2>
            <form onSubmit={handleSubmit}>
                <input name="username" type="text" placeholder="Username" required />
                <button type="submit">Submit</button>
            </form>

            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user} <button onClick={() => deleteUser(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Exercise3;
