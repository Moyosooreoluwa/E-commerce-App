import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="light" variant="light">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img
                    alt=""
                    src="/images/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{' '}
                  Moyozon
                </Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">Moyo 2022</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
