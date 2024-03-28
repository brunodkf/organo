import { useState } from 'react'
import './campoTexto.css'

export const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    // let conteudo = 'BRUNO'; 👇🏾
    // const [conteudo, setConteudo] = useState('BRUNO')
    // HOOK useState => { useState } 👆🏾

    const aoDigitado = (event)=>{  
        props.aoAlterado(event.target.value)
    }
    // 👆🏾 Também podemos chamar a função diretamente no onChange assim: onChange={(e)=>{setConteudo(e.target.value); console.log(conteudo)}} 

    return (
        <div className="campoTexto">
            <label htmlFor="">
                {props.label}
            </label>
            <input value={props.conteudo} onChange={aoDigitado} required={props.obrigatorio} type={props.type} name={props.name} placeholder={placeholderModificada} />
        </div>
    )
}