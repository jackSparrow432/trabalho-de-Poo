import html2pdf from "html2pdf.js";

function GerarPdf() {
  const elemento = document.getElementById("curriculo");

  const opcoes = {
    margin: 0,
    filename: "curriculo.pdf",
    html2canvas: { scale: 2 },
    jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
  };

    html2pdf().set(opcoes).from(elemento).save();
}

export default GerarPdf;
