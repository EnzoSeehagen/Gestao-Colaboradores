import Personagem from '../Personagem'
import './Tipo.css'

const Tipo = (props) => {

    return (
        <body>
            <section className='tipo'>
                <h3>{props.nome}</h3>
            </section>
        </body>
    )
}

export default Tipo