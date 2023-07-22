import React, {useState} from 'react';

export const ContadorA = () => {

    const [contador, setContador] = useState(0);
    const handleContador = (e) => {
        switch (e.target.id) {
            case 'btnAdd':
                setContador(contador+1);
                break;
            case 'btnRemove':
                setContador(contador-1);
                break;
            case 'btnReset':
                setContador(0);
                break;
            default:
                break;
        } 
    }

    return (
        <div>
            <h2 className="contador-title">Contador Avanzado: {contador}</h2>
            <div className="botones-container" id='btnContador'>
                <button className="boton-incrementar" style={{ marginRight: '10px' }} id='btnAdd' onClick={handleContador}>Incrementar</button>
                <button className="boton-decrementar" id='btnRemove' onClick={handleContador}>Decrementar</button>
            </div>
            <button className="boton-reset" id='btnReset' onClick={handleContador}>Restablecer</button>
        </div>
    );
}