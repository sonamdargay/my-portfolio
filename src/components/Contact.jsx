import {Button, Container} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import DocumentTitle from "./DocumentTitle";

function  Contact(){

    DocumentTitle("Contact me | Sonam Dargay");

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Container>
            <div className="contact-page">
                <h1>Contact Me</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3}  onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Button as="input" type="submit" value="Submit" />{' '}
                    </Form.Group>
                </Form>
            </div>
        </Container>
    )
}

export default Contact;