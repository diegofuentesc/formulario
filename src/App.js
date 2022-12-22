import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/style.css"
import Input from './Componentes/Input.jsx';
import Boton from './Componentes/Boton.jsx';


function App() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');

  const BotonForm = () => {
    if(password === '252525'){
      return <Boton></Boton>
    }else{
      return 'contraseña incorrecta';
    }
  }
  return (
    <div className="App">
      <Input nombre={nombre} setNombre={setNombre} password={password} setPassword={setPassword}></Input>
      <BotonForm></BotonForm>
    </div>
  );
}

export default App;
