import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario/index.js';
import Tipo from './componentes/Tipo';

function App() {

  const funcaoPersonagem = [
    {
      nome: 'Rei / Rainha',
      corPrimaria: '#131419',
    },
    {
      nome: 'Príncipe / Princesa',
      corPrimaria: '#131419',
    },
    {
      nome: 'Conselho do Rei',
      corPrimaria: '#131419',
    },
    {
      nome: 'Montadores de Dragões',
      corPrimaria: '#131419',
    },
    {
      nome: 'Nortenhos',
      corPrimaria: '#131419',
    },
    {
      nome: 'White Walkers',
      corPrimaria: '#131419',
    }
  ]

  const[personagens, setPersonagem] = useState([])

  const aoPersonagemAdicionado = (personagem) => {
    console.log(personagem)
    setPersonagem([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoPersonagemCadastrado={personagem => aoPersonagemAdicionado(personagem)}/>

      {funcaoPersonagem.map(tipo => <Tipo 
      key={tipo.nome} 
      nome={tipo.nome} 
      corPrimaria={tipo.corPrimaria}
      personagens={personagens.filter(personagem => personagem.tipo === tipo.nome )}/>)}   
        
    </div>
  );
}

export default App;
