import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup} from 'reactstrap';
//import Contador from './components/Contador';
//import Tarea from './components/Tarea';

class App extends React.Component{
  
  state={
    abierto: false,
  }
  
  abriModal = () =>{
    this.setState({abierto: !this.state.abierto})
    
  }

  render(){

let contador = 0
const aumentar = () =>{
  contador = contador +1
  console.log('el contador es: '+contador)
  return contador
}

const estiloVentana={
    position: "absolute",
    top: "50%",
    left: "50%",
    transform:"translate(-50%, -50%)"
  }  
    return(
      <>
      <div className="principal">
        <div className="secundario">
        <h1>Supermarket List</h1>
        <h3>contador renderizado {contador}</h3>
        <button className="btnPrincipal" onClick={this.abriModal}>Add Item</button>
        </div>
      </div>

      <Modal className="modalclass" isOpen={this.state.abierto} style={estiloVentana}>
        <ModalHeader className="secundario">
          Add item
        </ModalHeader>
        <ModalBody>
          <FormGroup>
          <Input type="text" id="item" className="border border-primary"></Input>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-lg btn-secondary button" onClick={this.abriModal}>Close</button>
          <button className="btn btn-primary btn-lg button" onClick={()=> {aumentar(); this.abriModal()}}>Add</button>
        </ModalFooter>
      </Modal>
      </>
    )
  }
}

export default App;
