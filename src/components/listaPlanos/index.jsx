import './index.scss'

export default function ListaPlanos(props) {
    return (
        <div className='lista' key={props.pos}>
            <div className='plano'>
                <div className='cor' style={{ backgroundColor: props.item.tema }}></div>
                <h1>{props.item.titulo}</h1>
                <p>{props.item.tempo}</p>
            </div>
        </div>
    )
}