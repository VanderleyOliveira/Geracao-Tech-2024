import { Link } from "react-router-dom";

const Produtos = () => {
    return (
        <>
            <h1>Produtos</h1>
            <ul>
                <li><Link to={"/produto/1/Alface"}>Alface</Link></li>
                <li><Link to={"/produto/2/Bacon"}>Bacon</Link></li>
                <li><Link to={"/produto/3/Caixa de Leite"}>Caixa de Leite</Link></li>
                <li><Link to={"/produto/4/Esfirra"}>Esfirra</Link></li>
                <li><Link to={"/produto/5/Framboesa"}>Framboesa</Link></li>
            </ul>
        </>
    );
};

export default Produtos;