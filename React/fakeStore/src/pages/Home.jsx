import { useEffect, useState } from "react";
import { API } from "../services"

const Home = () => {

    const [products, setProducts] = useState([]);

    async function buscarProdutos(){
       const request = await API.get('/products');
       setProducts(request.data);
    }

    useEffect(() => {
        buscarProdutos();
    }, [])

    console.log(products);

    return (
        <>
            <section className="overflow-hidden px-5">
                <h1>Lista de Produtos</h1>

                <ul className="grid list-none p-0">
                    <li className="col-12 md:col-3">
                        <div className="shadow-4 p-3 border-round-md">
                            <div className="relative">
                                <img className="w-full" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt=""/>
                                <h6 className="absolute top-0 right-0 bg-primary py-1 px-2 border-round-md">4.0</h6>
                            </div>
                            <h3 className="mb-0">Nome do produto</h3>
                            <h6 className="mt-0 text-primary uppercase">Categoria</h6>
                            <h2 className="mb-0">R$00.00</h2>
                        </div>
                    </li>
                    <li className="col-12 md:col-3">
                        <div className="bg-red-500">produtos2</div>
                    </li>
                    <li className="col-12 md:col-3">
                        <div className="bg-red-500">produtos3</div>
                    </li>
                    <li className="col-12 md:col-3">
                        <div className="bg-red-500">produtos4</div>
                    </li>
                    <li className="col-12 md:col-3">
                        <div className="bg-red-500">produtos5</div>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default Home;