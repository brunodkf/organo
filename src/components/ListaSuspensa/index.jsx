import './listaSuspensa.css';

export const ListaSuspensa = (props) => {

    // console.log(props.itens); 
    // props.itens chama um array(TIMES) criado em Formulario que é passado por props.

    return (
        <div className='lista-suspensa'>
            <label> {props.label} </label>
            <select value={props.conteudo} onChange={(e) => props.aoAlterado(e.target.value)}>

                <option value=""></option>
                
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
                
                {/* Aqui, pegamos o array coletado pelo props e executamos um .map() onde pra cada {item} do array
                    ele vai retornar a tag <option> onde a key e conteudo da tag tem o mesmo valor 
                    algo parecido, PARECIDO com Elemento.map(item){
                        return(
                         <option key = {item}>
                                {item}
                         </option>
                        )
                    }*/}
            </select>
        </div>
    )
}