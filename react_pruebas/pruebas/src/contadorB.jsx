import React, {useState} from 'react';

export const ContadorB = () => {

    const [contador, setContador] = useState(0);

    const handleContador = () => {
        setContador(contador + 1)
    }

return (
    <div>
        <h2>Contador: {contador} </h2>
        <button onClick={handleContador}>Incrementar</button>
    </div>
);
}