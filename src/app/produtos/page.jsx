"use client";

import { useState, useEffect } from "react"; 

export default function Produtos() {
    const [ listaProdutos, setListaProdutos ] = useState([]);
    const [msgErro, setMsgErro ] = useState([]);

    useEffect( ()=> {
        fetch("https://dummyjson.com/products/?limit=10")
        .then ( res => res.json() )
        .then ( data => {
            console.log(data);
            setListaProdutos(data.products);
            setMsgErro("");
        })
        .catch( error => setMsgErro(error.message))
    }, [] );

    return(
        <main>
            <h1>Lista de produtos</h1>
            {msgErro != "" && <p>Erro: {msgErro}</p>}
            {listaProdutos.length > 0 ?
            <div>
                {listaProdutos.map((produtos, idx)=> {
                    return (
                        <div key={idx}>
                            <img src={produtos.images} alt="" />
                            <h2>{produtos.title}</h2>
                            <a href={`/produtos/${produtos.id}`}>Saiba mais.</a>
                        </div>
                    )
                })}
            </div>
            :
            <div>
                <p>Não há produtos...</p>
            </div>
            }
        </main>
    )
}