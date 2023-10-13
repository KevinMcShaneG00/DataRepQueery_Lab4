import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        {/*navigation*/}
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="create">create</Nav.Link>
              <Nav.Link href="read">read</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/*routing to pages through url changes*/}
        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
          <Route path='/read' element={<Read></Read>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
