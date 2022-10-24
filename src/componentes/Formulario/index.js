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

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Form enviado!')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do personagem</h2>
        <CampoTexto obrigatorio={true} label="" placeholder="Digite o nome do personagem" />
        <CampoTexto obrigatorio={true} label="" placeholder="Digite a sua casa" />
        <CampoTexto obrigatorio={true} label="" placeholder="Digite o endereço da imagem " />
        <ListaSuspensa obrigatorio={true} label="" placeholder="Digite o tipo do personagem " itens={times}/>
        <Botao>
          Savar e cadastrar Card do personagem
        </Botao> 
      </form>
    </section>
  );
};

export default Formulario;
