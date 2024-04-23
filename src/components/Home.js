import {Container, Row, Col, Button} from "react-bootstrap";
import heroImage from '../assets/hero-image.png';
import '../styles/styles.css'

function Home() {
    return (
        // <div className="hero-section d-flex align-items-center" style={{backgroundImage: `url(${heroImage})`}}>
        //     <Container>
        //         <Row className="justify-content-center">
        //             <Col md={8} className="text-center text-white">
        //                 <h1>Welcome to My Portfolio</h1>
        //                 <p></p>
        //                 <Button variant="light" size="lg">Get Started</Button>
        //             </Col>
        //         </Row>
        //     </Container>
        // </div>

    <div className="hero-section bg-primary text-light">
        <Container>
            <Row className="justify-content-center">
                <Col md={8} className="text-center">
                    <h1>Welcome to Your Portfolio</h1>
                    <p>Your tagline or a brief description here</p>
                    <Button variant="light" size="lg">Get Started</Button>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Home