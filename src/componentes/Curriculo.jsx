function Curriculo({ dados }) {
  return (
    <div
      id="curriculo"
      style={{
        width: "800px",
        minHeight: "1120px",
        display: "flex",
        background: "white",
        fontFamily: "Arial",
      }}
    >
      {/* COLUNA ESQUERDA */}
      <div
        style={{
          width: "28%",
          background: "#0a4b45",
          color: "white",
          padding: "30px 20px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          {dados.Foto ? (
            <img
              src={dados.Foto}
              alt="foto"
              style={{
                width: "130px",
                height: "130px",
                objectFit: "cover",
                borderRadius: "100%",
                border: "3px solid white",
              }}
            />
          ) : (
            <div
              style={{
                width: "130px",
                height: "130px",
                borderRadius: "100%",
                background: "gray",
                margin: "0 auto",
              }}
            />
          )}
        </div>

        <h3>FORMAÇÃO ACADÊMICA</h3>
        <p>{dados.Formacao}</p>

        <h3 style={{ marginTop: "30px" }}>CURSOS</h3>
        <p>{dados.Cursos}</p>

        <h3 style={{ marginTop: "30px" }}>HABILIDADES</h3>
        <p>{dados.Habilidades}</p>

        <h3 style={{ marginTop: "30px" }}>SOFTWARES</h3>
        <p>{dados.Softwares}</p>
      </div>

      {/* COLUNA DIREITA */}
      <div style={{ width: "72%", padding: "40px 40px" }}>
        <h1 style={{ marginTop: 0, fontSize: "32px" }}>
          {dados.NomeCompleto}
        </h1>

        <p style={{ margin: "6px 0" }}>{dados.Endereco}</p>
        <p style={{ margin: "6px 0" }}>{dados.NumeroTelefone}</p>
        <p style={{ margin: "6px 0" }}>{dados.Email}</p>

        <h2 style={{ marginTop: "25px" }}>RESUMO</h2>
        <p>{dados.Descricao}</p>

        <h2 style={{ marginTop: "30px" }}>EXPERIÊNCIA PROFISSIONAL</h2>
        <p>{dados.Experiencia}</p>
      </div>
    </div>
  );
}

export default Curriculo;
