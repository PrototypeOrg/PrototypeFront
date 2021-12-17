// vendors
import React from "react";
import { useQuery, gql } from '@apollo/client';
import './styles/users.view.css';  
import ListGroup from 'react-bootstrap/ListGroup'

import logo from './styles/users.jpg';

import Menu1 from 'components/menu.component';

const USERS = gql `
  query AllUsers {
    allUsers {
      _id
      email
      documentId
      fullName
      role
    }
  }
`;

const Users = () => {
  const { data } = useQuery(USERS);
  console.log(data);

  return (
    <div>
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
        <h2 className="titulo">Usuarios</h2>
      </>

      <ListGroup as="ol" numbered>
          <>
            {!data ? <></> : data?.allUsers?.map(user => (
              <>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{user.fullName}</div>
                      <div>Email: {user.email} </div>
                      <div>Rol de Usuario: {user.role}</div>
                      <div>ID: {user._id}</div>
                    </div>
                  </ListGroup.Item>
              </>
            ))
            }
            
          </>
      </ListGroup>
      
    
    </div>
  )

};

export default Users;


