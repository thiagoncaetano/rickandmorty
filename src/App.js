import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import { Col, Container, Row } from "react-bootstrap";
import Cards from "./components/Cards/cards";
import Filters from "./components/Filters/filters";

function App() {

  return (
    <Container className="App">
      <Row>
        <Col className="text-center my-4">
          <h1>RICK AND MORTY <span className="text-primary">WIKI</span></h1>
        </Col>
      </Row>
      <Row>
        <Filters />
        <Col lg={8}>
          <Row>
            <Cards />
          </Row>
        </Col>
      </Row>
    </Container >
  );
}

export default App;
