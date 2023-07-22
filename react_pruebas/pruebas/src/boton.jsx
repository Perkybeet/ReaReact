import React from "react";

export const Boton = (props) => {
    const {texto, backColor, colorText} = props;

    const estilo = {
        backgroundColor: backColor,
        color: colorText,
    }
    return (
        <button style={estilo}>{texto}</button>
    )
}