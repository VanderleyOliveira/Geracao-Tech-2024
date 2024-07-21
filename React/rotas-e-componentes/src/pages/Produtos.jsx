import React from 'react';

const Produtos = () => {
    return (
        <>
            <h1>Produtos</h1>
            <ul>
                <li><link to={"/produto/1/Alface"}>Alface</link></li>
                <li><link to={"/produto/2/Bacon"}>Bacon</link></li>
                <li><link to={"/produto/3/Caixa de Leite"}>Caixa de Leite</link></li>
                <li><link to={"/produto/4/Esfirra"}>Esfirra</link></li>
                <li><link to={"/produto/5/Framboesa"}>Framboesa</link></li>
            </ul>
        </>
    );
};

export default Produtos;