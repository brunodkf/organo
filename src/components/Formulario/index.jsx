import { useState } from 'react'
import { ListaSuspensa } from '../ListaSuspensa'
import { Botao } from './Botao'
import { CampoTexto } from './CampoTexto'
import './formulario.css'

export const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

   
    const aoSalvar = (event) => {
        event.preventDefault() //previne ação do form (mantém na mesma tela por exemplo)
        
        // console.log('FORM FOI ENVIADO =>', nome, cargo, imagem, time);
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do time</h2>

                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu Nome"
                    conteudo={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    conteudo={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Faça Upload da Imagem"
                    conteudo={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.nomeTimes}
                    conteudo={time}
                    aoAlterado={e => setTime(e)} //O ciclo de vida é complexo, presta atenção nessa parte
                />


                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>

    )
}