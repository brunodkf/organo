import { Colaborador } from '../Colaborador';
import './time.css';

export const Time = (props) => {
    return (
        (props.colaboradores.length > 0) ?   //estudar sobre o ternario '?'
        <section className="time" style={{ backgroundColor: props.corFundo }}>
            <h3 className="time__titulo" style={{ borderColor: props.corPrincipal }} >{props.nomedotime}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={props.corPrincipal} />)}
            </div>
        </section>
        : ''
    )
}
