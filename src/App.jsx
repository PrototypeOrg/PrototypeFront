// vendors
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

// styles
import 'styles/App.scss';

// views
import Home from 'home/views/home.view';
import Projects from 'projects/views/projects.view';
import SignUp from 'users/views/signup.view';
import Menu from 'components/menu.component';
import Inicio from 'components/index/inicio';
import Users from 'users/views/users.view';
import Login from 'users/views/login.view';
import NoAccess from 'components/no-access.component';

function App() {
  return (
    <>
      {/* <Menu /> */}
      <Container>
        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route index element={<Inicio />} />

          
          <Route path="projects" element={<Projects />} />
          <Route path="users">
            <Route index element={<Users />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="no-access" element={<NoAccess />}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
