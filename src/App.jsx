import { useState } from 'react'
import './App.css'
import './componentes/DadosPessoais'
import DadosPessoais from './componentes/DadosPessoais'
import GerarPdf from './componentes/GerarPdf'

function App() {
  const[dadosPessoais, setDadosPessoais] = useState({
    Nome: "",
    Sobrenome:"",
    DataNascimento:"",
    Endereco:"",
    NumeroTelefone:"",
    Email:""
  })

  return(
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-500px'>
        <h1 >Curriculo</h1>
        <DadosPessoais 
          dados={dadosPessoais}
          setDados={setDadosPessoais}>
        </DadosPessoais>
        <button onClick={()=>GerarPdf(dadosPessoais)}>Gerar curriculo</button>
      </div>
    </div>
  )
}

export default App
