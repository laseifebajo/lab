//importing is what makes everyhting that you code in different files show up on your screen 
import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//navigating to different tabs
class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        {/* This is where you navigate between the different headers */}
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/footer">Footer</Nav.Link>
              <Nav.Link href="/header">Header</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          {/* This is where the different paths to the js files are done */}
          <Route path="/"exact><Content/></Route>
          <Route path="/header"exact><Header></Header></Route>
          <Route path="/footer"exact><Footer></Footer></Route>
        </Switch>
        
      </div>
      </Router>
    );
  }
}
export default App;
