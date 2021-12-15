import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

const Registroform = ( handleChange, handleClick, categorias, formValue) => {
return (

  <Card  className="CardRegistro bg-dark text-white" >   
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Documento</Form.Label>
        <Form.Control
          type="number"
          name="documentld"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Rol</Form.Label>
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">Administrador</option>
        <option value="2">Estudiante</option>
        <option value="3">Lider</option>
     </Form.Select>
     </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          name="password"
          onChange={handleChange}
      
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirme su contraseña</Form.Label>
        <Form.Control
          type="password"
          name="password"
          onChange={handleChange}
      
        />
      </Form.Group>

      <Button type="button" variant="light" >
        Cancelar
      </Button>
      <Button
        onClick={handleClick}
        type="button"
        variant="light" 
        className="float-end"
      >
        Guardar
      </Button>
    </Form>
    </Card>
)

}

export default Registroform;