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
import ListGroup from 'react-bootstrap/ListGroup'

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

const PROJECTS = gql`
  query AllProjects {
    allProjects {
      name
      generalObjective
      specificObjectives
      budget
      leader_id
      status
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
  generalObjective: Yup.string().required('Campo requerido'),
  budget: Yup.number().required('Campo requerido'),
  startDate: Yup.string().required('Campo requerido'),
  endDate: Yup.string().required('Campo requerido'),
  leader_id: Yup.string().required('Campo requerido'),
  status: Yup.string().required('Campo requerido'),
})



const Projects = () => {

  const { data } = useQuery(PROJECTS);
  console.log("hola",data);
  const [registerProject] = useMutation(ADDPROJECT);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [first, setFirst] = useState(1);
  /* const { data, refetch } = useQuery(REPOSITORIES_QUERY, { variables: { first } }); */
  const [addStar] = useMutation(ADD_START, {
    refetchQueries: [ REPOSITORIES_QUERY ]
  });
  const [removeStar] = useMutation(REMOVE_START, {
    refetchQueries: [ REPOSITORIES_QUERY ]
  });

/*   const memoizedRefetch = useCallback(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if(first > 1) {
      memoizedRefetch();
    }
  }, [first, memoizedRefetch]);
 */
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
        <h2 className="titulo">Crear Proyecto</h2>
      </>
    </>
    <Col lg="5">
      <Alert dismissible variant="danger" onClose={() => setError(false)} show={error}>
        Error regitrando el proyecto
      </Alert>
      <Alert dismissible variant="success" onClose={() => setSuccess(false)} show={success}>
        Proyecto creado con éxito. Haz click <Link className="alert-link" to="/">aquí</Link> para iniciar session
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
              <Form.Label>Nombre del Proyecto</Form.Label>
              <Form.Control 
                name="name" 
                placeholder="Nombre del Proyecto" 
                isInvalid={touched.name && !!errors.name}
                {...getFieldProps('name')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDocumentId">
              <Form.Label>Objetivo General</Form.Label>
              <Form.Control 
                name="generalObjective"
                placeholder="Ingresa el Objetivo General"
                isInvalid={touched.generalObjective && !!errors.generalObjective}
                {...getFieldProps('generalObjective')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.generalObjective}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Presupuesto</Form.Label>
              <Form.Control
                name="budget"
                type="number"
                placeholder="Ingresa el Presupuesto"
                isInvalid={touched.budget && !!errors.budget}
                {...getFieldProps('budget')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.budget}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Fecha de inicio del Proyecto</Form.Label>
              <Form.Control
                name="startDate"
                type="date"
                isInvalid={touched.startDate && !!errors.startDate}
                {...getFieldProps('startDate')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.startDate}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Fecha de final del Proyecto</Form.Label>
              <Form.Control
                name="endDate"
                type="date"
                isInvalid={touched.endDate && !!errors.endDate}
                {...getFieldProps('endDate')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.endDate}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Label htmlFor="role" className="form-label">Estado del Proyecto</Form.Label>
            <Form.Group className="mb-3" controlId="formRole">
              <Form.Select 
                name="status"
                isInvalid={touched.status && !!errors.status}
                {...getFieldProps('status')}
              >
                <option value="">Selecciona el estado</option>
                <option value="active">Activo</option>
                <option value="inactive">Inactivo</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.status}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Leader</Form.Label>
            <Form.Control
              name="leader_id"
              placeholder="Ingresa el ID del Leader"
              isInvalid={touched.leader_id && !!errors.leader_id}
              {...getFieldProps('leader_id')}
            />
            <Form.Control.Feedback type="invalid">
              {errors.leader_id}
            </Form.Control.Feedback>
          </Form.Group>
            <Button type="submit">Crear Proyecto</Button>
          </Form>
        )}
      </Formik>
    </Col>
    <h2 className="titulo">Proyectos</h2>
    <ListGroup as="ol" numbered>
          <>
            {!data ? <></> : data?.allProjects?.map(project => (
              <>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{project.name}</div>
                      <div>Objetivo General: {project.generalObjective} </div>
                      <div>Presupuesto: {project.budget}</div>
                      <div>Estado del Proyecto: {project.status}</div>
                      <div>ID Leader: {project.leader_id}</div>
                    </div>
                  </ListGroup.Item>
              </>
            ))
            }
            
          </>
      </ListGroup>
  </Row>

  )
};

export default Projects;