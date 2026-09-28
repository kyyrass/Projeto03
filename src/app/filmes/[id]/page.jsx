"use client";

import './page.css'
import { useState, useEffect } from "react";
import dados from '@/filmes.json'
import { useParams } from "next/navigation";

export default function Filme(){
    const [filme ,setFilme] = useState(null);
    const params = useParams();

    useEffect( ()=> {
        const filmeEncontrado = dados.find(f=> f.id == params.id);
        setFilme(filmeEncontrado);
    }, [] )

    return(
        <main>
            {filme != null && 
            <div className='container-filme'>
                <img src={filme.imagem}/>
                <h1>Descrição do Filme: {filme.titulo}</h1>
                <p>{filme.sinopse}</p>
                <p>Criado por: {filme.diretores}</p>
                <p>Ano de lançamento: {filme.ano}</p>
                <span>Duração: {filme.duracaoMinutos} minutos</span>

            </div>}
        </main>
    )
}