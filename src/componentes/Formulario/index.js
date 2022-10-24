import { useState } from "react";
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

  const [nome, setNome] = useState('')
  const [casa, setCasa] = useState('')
  const [imagem, setImagem] = useState('')


  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Form enviado!', nome, casa, imagem)
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do personagem</h2>
        <CampoTexto 
              valor={nome} obrigatorio={true} label="" 
              placeholder="Digite o nome do personagem"  aoAlterado={valor => setNome(valor)}/>
        <CampoTexto 
              valor={casa} obrigatorio={true} label="" 
              placeholder="Digite a sua casa" aoAlterado={valor => setCasa(valor)}/>
        <CampoTexto 
              valor={imagem} obrigatorio={true} label="" 
              placeholder="Digite o endereço da imagem " aoAlterado={valor => setImagem(valor)} />
        <ListaSuspensa 
              obrigatorio={true} label="" 
              placeholder="Digite o tipo do personagem " itens={times}/>
        <Botao>
              Savar e cadastrar Card do personagem
        </Botao> 
      </form>
    </section>
  );
};

export default Formulario;
