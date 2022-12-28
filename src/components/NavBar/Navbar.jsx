import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidgetIcon from './CartWidget/CartWidget';

export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Col>
                        <Navbar.Brand href="#home">Tecnological</Navbar.Brand>
                    </Col>
                    <Col>
                        <Nav className="justify-content-end">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#products">Products</Nav.Link>
                            <Nav.Link href="#help">Help</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md="auto">
                        <CartWidgetIcon />
                    </Col>
                </Container>
            </Navbar>
        </>
    );
}
