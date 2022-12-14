import Personagem from "../Personagem";
import "./Tipo.css";

const Tipo = (props) => {
  return (
    <section className="tipo">
      <h3>{props.nome}</h3>
      <div className="personagens">
        {props.personagens.map((personagem) => (
          <Personagem
            nome={personagem.nome}
            tipo={personagem.tipo}
            imagem={personagem.imagem}
          />
        ))}
      </div>
    </section>
  );
};

export default Tipo;
