import { useState } from 'react'
import './App.css'
import DadosPessoais from './componentes/DadosPessoais'
import Curriculo from './componentes/Curriculo'
import GerarPdf from './componentes/GerarPdf'

function App() {
  const [dados, setDados] = useState({
  NomeCompleto: "",
  DataNascimento: "",
  Endereco: "",
  NumeroTelefone: "",
  Email: "",
  Foto: "",
  Descricao: "",
  Experiencia: "",
  Formacao: "",
  Cursos: "",
  Habilidades: "",
  Softwares: ""
});

  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-500px'>
        <h1>Currículo</h1>

        <DadosPessoais
          dados={dados}
          setDados={setDados}
        />

        {/* Esse é o currículo que será transformado em PDF */}
        <Curriculo dados={dados} />

        <button onClick={GerarPdf}>
          Gerar currículo
        </button>
      </div>
    </div>
  )
}

export default App

