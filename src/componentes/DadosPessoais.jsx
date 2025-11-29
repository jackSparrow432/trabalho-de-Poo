import iconePessoa from "./iconePessoa.png"
function DadosPessoais({dados,setDados}){

    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            <div>
                <img src={iconePessoa} alt="" style={{ width: "90px", height: "90px", objectFit: "cover" }}/>
                <button>Adicionar foto</button>
                <form className="p-2 space-y-2">
                    
                    <input type="text" id="1" placeholder="Nome" className="bg-slate-500" 
                    value={dados.NomeCompleto}
                    onChange={(e)=>setDados({...dados, NomeCompleto: e.target.value})}/><br/>

                    <input type="text" id="3" placeholder="Data de nascimento" className="bg-slate-500"
                    value={dados.DataNascimento}
                    onChange={(e)=>setDados({...dados, DataNascimento: e.target.value})}
                    /><br />
                    
                    <input type="text" id="4" placeholder="Endereço" className="bg-slate-500"
                    value={dados.Endereco}
                    onChange={(e)=>setDados({...dados, Endereco: e.target.value})}/><br />
                    
                    <input type="text" id="5" placeholder="Numero de telefone" className="bg-slate-500"
                    value={dados.NumeroTelefone}
                    onChange={(e)=>setDados({...dados, NumeroTelefone: e.target.value})}/><br />
                    
                    <input type="text" id="6" placeholder="E-mail" className="bg-slate-500"
                    value={dados.Email}
                    onChange={(e)=>setDados({...dados, Email: e.target.value})}/><br />
                </form>
            </div>
        </div>
    )
}

export default DadosPessoais
