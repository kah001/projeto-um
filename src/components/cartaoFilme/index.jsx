import './index.scss'

export default function CartaoFilme(props) {

    function verificarCor() {
        if (props.item.classificacao == 'L') 
            return 'c-l';
        else if (props.item.classificacao == '10')
            return 'c-10'
        else if (props.item.classificacao == '12') 
            return 'c-12';
        else if (props.item.classificacao == '14')
            return 'c-14';
        else if (props.item.classificacao == '16')
            return 'c-16';
        else if (props.item.classificacao == '18')
            return 'c-18';
    }

    return (
        <div className='comp-cartao'>
            <img src={props.item.url} alt="" />

            <div className='estreia'>
                {props.item.estreia != '' &&

                <p>
                    {props.item.destaque == true &&
                        <i className='fa fa-star estrela'></i>
                    }

                    Estreia {props.item.estreia}
                </p>

                }
            </div>

            <h4>{props.item.nome}</h4>
            <p className={'classificacao ' + verificarCor()}>{props.item.classificacao}</p>
        </div>
    )
}