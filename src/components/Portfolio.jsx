import {Button, Card, Container, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import DocumentTitle from "./DocumentTitle";

function Portfolio() {
    DocumentTitle("Portfolio | Sonam Dargay");

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/sonamdargay/repos');
                setRepos(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching GitHub repositories:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    useEffect(() => {
        const results = repos.filter(repo =>
            repo.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [repos, searchTerm]);

    const handleSearch = () => {
        setSearchResults(repos.filter(repo =>
            repo.name.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return(
        <Container>
            <h1>Portfolio</h1>
            <h5>My GitHub Repositories</h5>
            <Form.Control
                placeholder="Search my GitHub repositories"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/*<Button variant="primary" onClick={handleSearch}>Search</Button>*/}
            <hr/>
            <ul>
                <Row>
                    {searchResults.map(repo => (
                        <Card style={{ width: '18rem' }} key={repo.id}>
                            {/*<Card.Img variant="top" src="" />*/}
                            <Card.Body>
                                <Card.Title>{repo.name}</Card.Title>
                                <Card.Text>
                                    {repo.description}
                                </Card.Text>
                                <Button variant="light">
                                    <Link to={repo.html_url}>{repo.name}</Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </ul>
        </Container>
    )
}

export default Portfolio;
