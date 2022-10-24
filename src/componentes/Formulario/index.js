import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {

  const times = [

    'Rei / Rainha',
    'Príncipe(s)',
    'Conselho do Rei',
    'Montadores de Dragões',
    'Nortenhos',
    'White Walkers',

  ]

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do personagem</h2>
        <CampoTexto label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto label="Papel" placeholder="Digite o seu papel" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem " />
        <ListaSuspensa itens={times}/>
      </form>
    </section>
  );
};

export default Formulario;
