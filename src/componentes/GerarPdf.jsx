import jsPDF from "jspdf";

function GerarPdf(dadosPessoais){
    const doc = new jsPDF();

    doc.text(`Nome: ${dadosPessoais.Nome}`, 10, 10);
    doc.text(`Sobrenome: ${dadosPessoais.Sobrenome}`, 10, 20);
    doc.text(`Data de nascimento: ${dadosPessoais.DataNascimento}`, 10, 30);
    doc.text(`Endereço: ${dadosPessoais.Endereco}`, 10, 40);
    doc.text(`Telefone: ${dadosPessoais.NumeroTelefone}`, 10, 50);
    doc.text(`Email: ${dadosPessoais.Email}`, 10, 60);

    doc.save("curriculo.pdf");
}

export default GerarPdf