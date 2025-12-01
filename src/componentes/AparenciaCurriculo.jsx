import iconePessoa from "./iconePessoa.png"

function aparenciaCurriculo({ dados }) {
  return (
    <div className= 'container' style={{ padding: "20px", lineHeight: "1.6", background:'#fff' }}>
        <div style={{ backgroundColor: "#496267"}}>
          {dados.foto && (
          <img 
            src={dados.foto? dados.foto:iconePessoa} 
            alt="Foto" 
            style={{ width: "120px", borderRadius: "8px", marginBottom: "20px" }} 
          />
        )}
        <p><strong>Data de nascimento:</strong> {dados.DataNascimento}</p>
        <p><strong>Endereço:</strong> {dados.Endereco}</p>
        <p><strong>Telefone:</strong> {dados.NumeroTelefone}</p>
        <p><strong>Email:</strong> {dados.Email}</p>
      </div>
      
      <div>
        <h1 style={{color:"black"}}>{dados.Nome} {dados.Sobrenome}</h1>
        <p><strong style={{color:"black"}}>resumo</strong></p>
        <p><strong style={{color:"black"}}>experiencia profissional</strong></p>
        <p><strong style={{color:"black"}}>formação acadêmica</strong></p>
      </div>
      
    </div>
  )
}

export default aparenciaCurriculo