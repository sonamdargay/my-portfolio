import {Col, Container, Row} from "react-bootstrap";
import DocumentTitle from "./DocumentTitle";

function Resume() {
    DocumentTitle("Resume | Sonam Dargay");
    return(
        <Container className="mt-5">
            <Row>
                <Col>
                    <h1 className="mb-4">Resume</h1>
                    <section className="mb-5">
                        <h3 className="mb-3">Experiences</h3>
                        <h5>Project Manager, Royal Monetary Authority of Bhutan (RMA)</h5>
                        <p className="text-muted">2022 – June 2023</p>
                        <ul>
                            <li>Administered, debugged, and enhanced Bhutan Financial Switch (BFS) which is the country’s payment system architecture that enables interoperability of financial transactions between the various financial institutions.</li>
                            <li>Led the implementation project of chip-based RuPay card scheme transactions in Bhutan.</li>
                            <li>Tested, implemented, and deployed the project for interoperability of the JCB card scheme and BFS.</li>
                        </ul>

                        <h5>Software Developer, Royal Monetary Authority of Bhutan (RMA)</h5>
                        <p className="text-muted">2019 – 2022</p>
                        <ul>
                            <li>Performed requirement gathering, designed, developed, and deployed applications and application programming interfaces (APIs) using Spring Boot and Angular for the organization’s operational efficiency.</li>
                            <li>Debugged, maintained, and revamped internal information systems of the RMA.</li>
                            <li>Designed, implemented, administered, and monitored databases required for information systems of RMA.</li>
                            <li>Implemented complex queries and stored procedures using SQL for generating organizational business reports.</li>
                            <li>Installed servers and databases and deployed information systems for the organization on both Windows and Linux platforms.</li>
                        </ul>
                    </section>

                    <section className="mb-5">
                        <h3 className="mb-3">Education</h3>
                        <h5>Master of Information Technology, Queensland University of Technology</h5>
                        <p className="text-muted">July 2023 – Present</p>
                        <h5>Bachelor of Engineering in Information Technology, Royal University of Bhutan</h5>
                        <p className="text-muted">June 2019</p>
                    </section>

                    <section>
                        <h3 className="mb-3">Skills</h3>
                        <ul>
                            <li>Spring Framework</li>
                            <li>Flutter (Cross-platform development)</li>
                            <li>Angular</li>
                            <li>RDBMS (MySQL)</li>
                        </ul>
                    </section>
                </Col>
            </Row>
        </Container>
    )
}
export default Resume;