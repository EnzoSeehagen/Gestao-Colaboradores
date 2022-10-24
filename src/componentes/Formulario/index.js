import Botao from "../Botao";
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
        <CampoTexto label="" placeholder="Digite o nome do personagem" />
        <CampoTexto label="" placeholder="Digite a sua casa" />
        <CampoTexto label="" placeholder="Digite o endereço da imagem " />
        <ListaSuspensa label="" placeholder="Digite o tipo do personagem " itens={times}/>
        <Botao texto="Criar Card"/>
      </form>
    </section>
  );
};

export default Formulario;
