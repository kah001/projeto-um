import './index.scss'

export default function Cabecalho(props) {
    return (
        <header className='comp-cabecalho'>
            <h1>{props.titulo ?? 'Estudos De ReactJS'}</h1>
        </header>
    )
}