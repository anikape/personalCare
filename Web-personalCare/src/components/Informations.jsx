const Informations = () => {

    return (
    <main>
      <section className="section--informations">
      <div className="info">
        <h1>Cuidados com Idosos, pacientes hospitalares</h1>
        <br />
        <ul>
          <li id="indent">&#x2713; Precisa de alguém para cuidar do seu Idoso?</li><br />
          <li id="indent">&#x2713; Precisa fazer curativos especiais?</li><br />
          <li id="indent">&#x2713; Precisa de acompanhamento hospitalar/Homecare</li><br />
          <li id="indent">&#x2713; É profissional que atua em alguma dessas áreas</li><br />
        </ul>
        <br />
        <h2> A <strong>PersonalCare</strong> é o seu lugar!</h2>
      </div>
      <div className="information">
        <h1>O que você deseja?</h1>
        <button>Sou Profissional</button>
        <button>Estou a procura de um profissional</button>
      </div>
    </section>
    </main>
  );
}

export default Informations;
