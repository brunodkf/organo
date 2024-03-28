import { useState } from 'react'
import './App.css'
import { Banner } from './components/Banner'
import { Formulario } from './components/Formulario'
import { Rodape } from './components/Rodape'
import { Time } from './components/Time'

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9"
    },
    {
      nome: 'Front-End',
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    },
    {
      nome: 'Data Science',
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2"
    },
    {
      nome: 'Devops',
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8"
    },
    {
      nome: 'UX e Design',
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5"
    },
    {
      nome: 'Mobile',
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9"
    },
    {
      nome: ' Inovação e Gestão',
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF"
    },
  ]

  const [colaboradores, setColaboradores] = useState([]) //dessa vez é um array/lista, não uma string

  const aoNovoColaboradorAdicionado = (colaborador) => {
    // console.log(colaborador);
    setColaboradores(
      [...colaboradores, colaborador]
    )
  }

  return (
    <>
      <Banner />
      <Formulario nomeTimes={times.map(e => e.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time =>
        <Time
          key={time.nome}
          nomedotime={time.nome}
          corPrincipal={time.corPrimaria}
          corFundo={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      )
      }

      {/* cada elemento em uma lista deveria ter uma prop chamada key que seja única, como fizemos no select. Lembrando que essa key é do React! A nossa chave será key={time.nome}. */}

      <Rodape />
    </>
  )
}

export default App
