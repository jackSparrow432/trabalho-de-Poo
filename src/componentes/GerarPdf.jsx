import jsPDF from "jspdf";

function GerarPdf(dadosPessoais){
    const doc = new jsPDF();
    if(dadosPessoais.foto){
        doc.addImage(dadosPessoais.foto, 10, 10, 40, 40)
    }
    
    doc.text(`nome: ${dadosPessoais.nome}`, 10, 50);
    doc.text(`Sobrenome: ${dadosPessoais.Sobrenome}`, 10, 60);
    doc.text(`Data de nascimento: ${dadosPessoais.dataNascimento}`, 10, 70);
    doc.text(`Endereço: ${dadosPessoais.endereco}`, 10, 80);
    doc.text(`Telefone: ${dadosPessoais.numeroTelefone}`, 10, 90);
    doc.text(`email: ${dadosPessoais.email}`, 10, 100);
    doc.save("curriculo.pdf");
    
}

export default GerarPdf
