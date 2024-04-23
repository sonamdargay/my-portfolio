import {Container, Image} from "react-bootstrap";
import heroImage from '../assets/hero-image.png';

function About(){
    return(
        <Container>
            <div className="about-page">
                <h1>About Me</h1>
                <Image src={heroImage} alt="Sonam Dargay" rounded />
                <div className="about-content">
                    <p>
                        Hi, I'm Sonam Dargay, a full-stack developer and blogger from the Kingdom of Bhutan.
                        Currently, I'm pursuing my master's degree in Information Technology at Queensland University of
                        Technology.
                    </p>
                    <p>
                        I've developed several enterprise applications using Spring Boot for the central bank of Bhutan.
                        I've also managed IT projects aimed at enhancing interoperability of inter-bank and cross-border
                        financial transactions, including both card and cardless transactions.
                    </p>
                    <p>
                        My project experience includes setting up SMS Gateway Servers, installation of both open-source and commercial DBMSs,
                        Payment Gateway Integrations, and Front-end development using Angular.
                    </p>
                    <p>
                        I'm passionate about freelancing and contributing to open-source projects.
                        You can check out my projects <a href="link-to-projects">here</a>.
                    </p>
                    <p>
                        Connect with me on <a href="link-to-linkedin">LinkedIn</a>.
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default About;