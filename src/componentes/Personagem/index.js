import './Personagem.css'

const Personagem = ({ nome, imagem, tipo }) => {
    return (
        <div className='cardsombra'>
            <div className='cardpersonagem'>
                <div className='personagem'>
                    <div className='cabecalho'>
                        <div>
                            <img className='img' src={imagem} alt={nome}/>
                        </div>
                        <div className='rodape'>
                            <h4>{nome}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personagem