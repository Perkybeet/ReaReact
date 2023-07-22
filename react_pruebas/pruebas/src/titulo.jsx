import React from "react";


export const Titulo = (props) => {
    const { nivel, texto } = props;

    return React.createElement(nivel, null, texto);
}