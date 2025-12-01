import { useRef } from "react"
import iconePessoa from "./iconePessoa.png"
function DadosPessoais({dados,setDados}){

    const escolher = useRef();

    function escolherFoto(){
        escolher.current.click();

    }

function handleFoto(e) {
    const arquivo = e.target.files[0];

    if (!arquivo) {
        console.warn("Nenhum arquivo selecionado.");
        return;
    }

    const reader = new FileReader();

    reader.onload = () => {
        console.log("Base64 gerado:", reader.result);
        setDados({ ...dados, foto: reader.result });
    };

    reader.readAsDataURL(arquivo);
}

    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            <div>
                <img
                    src={dados.foto ? dados.foto : iconePessoa}
                    alt="Foto do usuário"
                    style={{ width: "90px", height: "90px", objectFit: "cover", borderRadius: "50%" }}
                />

                <input type="file" 
                    ref={escolher}
                    onChange={handleFoto}
                    accept="image/*"
                    style={{display: "none"}}
                />
                <button onClick={escolherFoto}>Adicionar foto</button>
                <form className="p-2 space-y-2">
                    
                    <input type="text" id="1" placeholder="Nome" className="bg-slate-500" 
                    value={dados.Nome} 
                    onChange={(e) =>setDados({ ...dados, Nome: e.target.value })}
                    /><br/>
                    
                    <input type="text" id="2" placeholder="Sobrenome" className="bg-slate-500"
                    value={dados.Sobrenome}
                    onChange={(e)=>setDados({...dados, Sobrenome: e.target.value})}
                    /><br/>

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

                    <input type="password" id="7" placeholder="senha" className="bg-slate-500"
                    value={dados.Senha}
                    onChange={(e)=>setDados({...dados, Senha: e.target.value})}/><br />


                </form>
            </div>
        </div>
    )
}

export default DadosPessoais