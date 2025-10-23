import React from "react";

interface Props {
    name: string,
    age?: number; // tanda tanya gunanya untuk opsional
}

const Greeting: React.FC<Props> = ({ name, age }) => {
    return (
        <div>
            <h2>Hello, {name}!</h2>
            {age && 
                <p>You are {age} years old</p>
            }
        </div>
    )
}

export default Greeting;