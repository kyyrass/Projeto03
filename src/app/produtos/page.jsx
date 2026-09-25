"use client";

import { useState, useEffect } from "react";
import CardProduto from '@/componets/CardProdutos'

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
            <div className="card-container">
                {listaProdutos.map((p)=> {
                    return <CardProduto key={p.id} produtos={p} />
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