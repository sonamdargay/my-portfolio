import {Button, Card, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Portfolio() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    console.log(repos)

    return(
        <Container>
            <h1>Portfolio</h1>
            <h5>My GitHub Repositories</h5>
            <ul>
                <Row>
                    {repos.map(repo => (
                        <Card style={{ width: '18rem' }}>
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