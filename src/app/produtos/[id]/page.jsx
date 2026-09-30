'use client';

import "./produto.css";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function Produto() {
    const [produto, setProduto] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setProduto(data);  
            })
    }, []);

    return (
        <main>
            {produto != null && 
                <div className="produto-container">
                    <img src={produto.images} alt="" />
                    <h1>{produto.title}</h1>
                    <h2>Categoria: {produto.category}</h2>
                    <p>Descrição: {produto.description}</p>
                    <p>Marca: {produto.brand}</p>
                    <p>Nota: <span>{produto.rating}</span></p>
                    <p>Estoque: <span>{produto.stock} <span>{produto.availabilityStatus}</span></span></p>
                    <p className="e">Envio: {produto.shippingInformation}</p>
                    <p className="p">Preço: ${produto.price}</p>
                </div>
            }
        </main>
    )
}