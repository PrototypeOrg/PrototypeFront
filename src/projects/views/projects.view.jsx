// vedors
import React, { useCallback, useEffect, useState } from "react";
import { useMutation, useQuery, gql } from '@apollo/client';
import { Formik } from "formik";
import * as Yup from 'yup';
import Alert from 'react-bootstrap/Alert';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

import Menu1 from 'components/menu.component';
import logo from 'projects/styles/proyectos.jpg';

// styles
import 'projects/styles/projects.styles.css';


const ADDPROJECT = gql`
  mutation RegisterProject($input: RegisterProjectInput!) {
    registerProject(input: $input) {
      _id
  }
}
`;

const REPOSITORIES_QUERY = gql`
  query MyRepositories ($first: Int!){
    viewer { 
      name
      repositories (first: $first){
        nodes {
          id
          name
          viewerHasStarred
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

const ADD_START = gql`
  mutation AddStart($starrableId: ID!) {
    addStar(input: {
      starrableId: $starrableId
    }) {
      starrable {
        stargazers {
          totalCount
        }
      }
    }
  }
`;

const REMOVE_START = gql`
  mutation RemoveStart($starrableId: ID!) {
    removeStar(input: {
      starrableId: $starrableId
    }) {
      starrable {
        stargazers {
          totalCount
        }
      }
    }
  }
`;

const initialValues = {
  name: '',
  generalObjective: '',
  specificObjectives: '',
  budget: '',
  startDate: '',
  endDate: '',
  leader_id:'',
  status:'inactive'
};

const validationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  generalObjective: Yup.required('Campo requerido'),
  budget: Yup.string().required('Campo requerido'),
  startDate: Yup.string().required('Campo requerido'),
  endDate: Yup.string().required('Campo requerido'),
  leader_id: Yup.string().required('Campo requerido'),
  status: Yup.string().required('Campo requerido'),
})



const Projects = () => {

  const [registerProject] = useMutation(ADDPROJECT);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [first, setFirst] = useState(1);
  const { data, refetch } = useQuery(REPOSITORIES_QUERY, { variables: { first } });
  const [addStar] = useMutation(ADD_START, {
    refetchQueries: [ REPOSITORIES_QUERY ]
  });
  const [removeStar] = useMutation(REMOVE_START, {
    refetchQueries: [ REPOSITORIES_QUERY ]
  });

  const memoizedRefetch = useCallback(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if(first > 1) {
      memoizedRefetch();
    }
  }, [first, memoizedRefetch]);

  return (
    <Row className="mt-3 justify-content-center">
    <>
      <Menu1 />
      <>
        <section className="container">
          <div>
            <figure>
              <img src={logo} className="container background" alt="" />
              <div className="contenido-textos"></div>
            </figure>
          </div> 
        </section>
        <h2 className="titulo">Proyectos</h2>
      </>
    </>
    <Col lg="5">
      <Alert dismissible variant="danger" onClose={() => setError(false)} show={error}>
        Error regitrando el usuario
      </Alert>
      <Alert dismissible variant="success" onClose={() => setSuccess(false)} show={success}>
        Usuario creado con éxito. Haz click <Link className="alert-link" to="/">aquí</Link> para iniciar session
      </Alert>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          registerProject({
            variables: {
              input: {
                ...values,
              }
            }
          })
          .then(() => {
            setError(false);
            setSuccess(true);
          })
          .catch(() => setError(true));
        }}
      >
        {({
          handleSubmit,
          getFieldProps,
          errors,
          touched
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control 
                name="email" 
                type="email" 
                placeholder="Ingresa tu correo" 
                isInvalid={touched.email && !!errors.email}
                {...getFieldProps('email')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDocumentId">
              <Form.Label>Documento de identidad</Form.Label>
              <Form.Control 
                name="documentId"
                type="number"
                placeholder="Ingresa tu documento de identidad"
                isInvalid={touched.documentId && !!errors.documentId}
                {...getFieldProps('documentId')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.documentId}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                name="name"
                placeholder="Ingresa tu nombre"
                isInvalid={touched.name && !!errors.name}
                {...getFieldProps('name')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                name="lastName"
                placeholder="Ingresa tu apellido" 
                isInvalid={touched.lastName && !!errors.lastName}
                {...getFieldProps('lastName')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Label htmlFor="role" className="form-label">Rol</Form.Label>
            <Form.Group className="mb-3" controlId="formRole">
              <Form.Select 
                name="role"
                isInvalid={touched.role && !!errors.role}
                {...getFieldProps('role')}
              >
                <option value="">Selecciona el rol</option>
                <option value="admin">Administrador</option>
                <option value="leader">Lider</option>
                <option value="student">Estudiante</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.role}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formtPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                name="password"
                type="password"
                placeholder="Contraseña" 
                isInvalid={touched.password && !!errors.password}
                {...getFieldProps('password')}
                
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Enviar</Button>
          </Form>
        )}
      </Formik>
    </Col>
  </Row>

  )
};

export default Projects;