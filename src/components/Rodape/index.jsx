import './rodape.css';
import rodapeImg from '../../assets/Rodapé.png'

export const Rodape = ()=>{
    return(
        <footer className="footer">
            <img src={rodapeImg} alt="Imagem de Rodape" />
        </footer>
    )
}