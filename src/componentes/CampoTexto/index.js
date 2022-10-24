import './CampoTexto.css'

const aoDigitado = (evento) => {
    console.log(evento.target.value)
} 

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} required={props.obrigatorio} className='dados' placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto