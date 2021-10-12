import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import  {nanoid}  from 'nanoid';

function App() {

const [estado, setEstado] = React.useState(false)
const [error, setError] = React.useState(null)
const [tarea, setTarea] = React.useState('')
const [A_items, setA_items] = React.useState([])

const abrirVentana=()=>{
  setEstado(true)
  console.log(estado)
}
const cerrarVentana=() =>{
  setEstado(false)
}

const agregarItem = e =>{
  e.preventDefault() //validar que no se deje vacio el campo
  if(!tarea.trim()){
  console.log('Elemento vacio')
  return
  }
  //console.log(tarea)

setA_items([
  ...A_items, 
    {id: nanoid(10), addTarea: tarea}
])
  setTarea('')
  setEstado(false)
}

const delTarea = id =>{
  const arrayFiltrado = A_items.filter(item => item.id !== id)
  setA_items(arrayFiltrado)
}

return(

  <>
    <div className="principal">
      
      <h1>Supermarket List</h1>
      <h4>{A_items.length} item(s)</h4>
      <br/>
      <br/>
      <div className="secundario col-8">
      <ul className="list-group">
        {
          A_items.map(item =>(
            <li className="list-group-item" key={item.id}>
            <span className="lead">{item.addTarea}</span>
            <button className="btn btn-danger btn-sm float-end" onClick={()=> delTarea(item.id)}>Delete</button> 
          </li>
          ))
        }
      </ul>
      </div>
      <br/>
      <button className="btn btn-info btnPrincipal" onClick={()=>abrirVentana()}>Add Item</button>
    </div>

  <Modal isOpen={estado} className="modalclass"> 
    <ModalHeader className="secundario">Add Item</ModalHeader>  
    <ModalBody>
    <form onSubmit={agregarItem}>
      <input type="text" className="secundario form-control" onChange={e => setTarea(e.target.value)} value={tarea} placeholder="ingresar item"></input>
      <br/>
      <button className="button btn btn-dark mx-2"  onClick={()=> cerrarVentana()}>Cerrar</button>
      <button className="button btn btn-info">Add Item</button>
    </form>
    </ModalBody>
  </Modal>   

</>

)
}
export default App;
