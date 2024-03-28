import { useRef, useState } from 'react'
import './faixa.css'

export const Faixa = (props) => {

    // const titulo = "Titulo"
    const [titulo, setTitulo] = useState('Titulo');

    // const mudaNome = (e)=>{
    //     setTitulo(e.target.value);
    // }

    const [numero, setNumero] = useState(1)

    // const somaUm = ()=>{
    //     setNumero(
    //         numero + 1
    //     )
    // }


    const [textoApoio, setTextoApoio] = useState('Texto')

    const inputEl = useRef('')


    const apoioAlterado = ()=>{     //Funcao chamada pelo Button para trocar o texto de apoio
        setTextoApoio(
            inputEl.current.value
        )
    }


    return (
        <div className="faixaTeste">
            <h1 className="teste">{titulo}</h1>
            <input type="text" onChange={(e) => { setTitulo(e.target.value) }} placeholder={props.placeholder} />

            <p className='numeral'>{numero}</p>
            <button onClick={() => setNumero(numero + 1)}>Muda</button>

            <p className="teste2">{textoApoio}</p>
            <input ref={inputEl} className='apoioInput' type="text"/>
            {/* <button onClick={apoioAlterado}>Troca Texto</button> */}
            <button onClick={()=> setTextoApoio(inputEl.current.value)}>Troca Texto</button>
        </div>
    )
}