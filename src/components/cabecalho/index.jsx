import './index.scss'

export default function Cabecalho(props) {

    return (
        <header className='comp-cabecalho'>
            {props.titulo ?? 'Estudos De ReactJS'}
        </header>
    )
}