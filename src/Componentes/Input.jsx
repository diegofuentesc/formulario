
import Form from 'react-bootstrap/Form';

const Input = ({nombre, setNombre, password, setPassword}) => {
  return (
    <Form>
        <h1>Desafio Estado de los componentes y eventos</h1>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" id="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder="Ingresa un texto" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Ingresa un texto" />
      </Form.Group>
    </Form>
  )
}

export default Input;