import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

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
      <Routes>
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='/create' element={<Header></Header>}></Route>
        <Route path='/read' element={<Footer></Footer>}></Route>
      </Routes>
        {/* <Header></Header>
      <Content></Content>
      <Footer></Footer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
