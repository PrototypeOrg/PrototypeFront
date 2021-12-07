import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from "react-bootstrap";
import {Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
const Home =() => {

    return (
        <div className="vh-100 row justify-content-center align-items-center BackColor">
        <div className="col-md-4 col-10">
        <Container>
        <Card  className="CardHome bg-dark text-white" >    
              
              <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
  
          <Form.Group className="mb-3 " controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recuérdame" />
          </Form.Group>
          <Link to="/Registro"><Button className="float-end" variant="light" type="submit">
             Registro
            </Button>{' '}
            </Link>
        
          <Button className="me-5" variant="light" type="submit">
            Ingresar
          
          </Button>{' '}
        
        </Form>
        </Card>
      
        </Container>
    
           </div>
         </div>
    )

}

export default Home;