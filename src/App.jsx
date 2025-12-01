import { useState } from 'react'
import './App.css'
import './componentes/DadosPessoais'
import DadosPessoais from './componentes/DadosPessoais'
import GerarPdf from './componentes/GerarPdf'
import AparenciaCurriculo from './componentes/AparenciaCurriculo'

function App() {
  const[dadosPessoais, setDadosPessoais] = useState({
    Senha:"",
    Cpf:"",
    Nome: "",
    Sobrenome:"",
    DataNascimento:"",
    Endereco:"",
    NumeroTelefone:"",
    Email:"",
    foto: null,
    Descricao:"",
    Experiencia:"",
    Formacao:""
  })

  return(
    <div className='container'>
      
      <div className='left'>
        <h1 >Curriculo</h1>
        <DadosPessoais 
          dados={dadosPessoais}
          setDados={setDadosPessoais}>
        </DadosPessoais>
        <button onClick={()=>GerarPdf(dadosPessoais)}>Gerar curriculo</button>
      </div>

      <div className='right'>
        <AparenciaCurriculo dados={dadosPessoais} />
      </div>
    </div>
  )
}

export default App
