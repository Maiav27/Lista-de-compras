import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Wrapper } from './style';
import { useState } from 'react';


const Adicionar = () => {

    const [valor, setValor] = useState('')
    const [lista, setLista] = useState([])
  
   
     
     const onChange = evt =>{
       setValor(evt.target.value)
       console.log(valor)
     } 

     const adicionarCompra = () =>{
       setLista([...lista, valor])
       setValor('')
       
     
     }
     const ExcluirElemento = elemento => {
         let array = lista.filter((atual) => atual !== elemento)
         setLista([...array])
     }

    const  renderizaLista = (elemento, index) => {
       return (
        <tr  key={`${elemento + index}`}>
        <td>
            <input type="checkbox" id="horns" name={elemento}/>
            <label htmlFor="">{elemento}</label>
            <button type="button" class="btn btn-danger" onClick={() => ExcluirElemento(elemento)}>Excluir</button>
        </td>
        </tr>
       )
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: '25ch',
        },
      }));
    
      const classes = useStyles();
    return (
        <>  
        <div className='container' style={{width : '400px', position : 'relative'}}>
              <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Lista </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lista.map(renderizaLista)}
                  </tbody>
            </table>
        </div>
            <Wrapper>
                <TextField
                label="Compra"
                id="outlined-margin-dense"
                onChange = {onChange}
                className={classes.textField}
                helperText="Coloque as compras pra sua lista"
                margin="dense"
                variant="outlined"
                value={valor}
                />
                <Button onClick={adicionarCompra}>Adicionar</Button>      
            </Wrapper>
        </>
    )
} 
export default Adicionar