import './Personagem.css'

const Personagem = () => {
    return (
        <div className='cardsombra'>
            <div className='cardpersonagem'>
                <div className='personagem'>
                    <div className='cabecalho'>
                        <div>
                            <img className='img' src="imagens/avatar.png" alt='Rhaenyra'/>
                        </div>
                        <div className='rodape'>
                            <h4>rhaenyra targaryen</h4>
                            <h5>Rainha</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personagem