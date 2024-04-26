import {Container, Row, Col, Button, Image} from "react-bootstrap";
import heroImage from '../assets/hero-image.png';
import '../styles/styles.css'

import getWeather from "../service/WeatherService";
import {useEffect, useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudRain, faSnowflake, faMeteor } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import DocumentTitle from "./DocumentTitle";

function Home() {

    DocumentTitle("Home | Sonam Dargay");

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const data = await getWeather();
            setWeather(data);
        };
        fetchWeather();
    }, []);

    const getBackgroundImage = () => {
        if (!weather) return null;

        const condition = weather.weather[0].main.toLowerCase();
        if (condition === 'clear') {
            return 'https://img.freepik.com/free-photo/cloud-blue-sky_1232-3108.jpg';
        } else if (condition === 'clouds') {
            return 'https://img.freepik.com/free-photo/white-clouds-clear-blue-sky_181624-44898.jpg';
        } else if (condition === 'rain') {
            return 'https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg';
        } else {
            return 'https://img.freepik.com/free-photo/top-view-workspace-with-agenda-notebook_23-2148430833.jpg';
        }
    };

    const getWeatherIcon = () => {
        if (!weather) return null;

        const condition = weather.weather[0].main.toLowerCase();
        if (condition === 'clear') {
            return <FontAwesomeIcon icon={faSun} size="lg" />;
        } else if (condition === 'clouds') {
            return <FontAwesomeIcon icon={faCloud} size="lg" />;
        } else if (condition === 'rain') {
            return <FontAwesomeIcon icon={faCloudRain} size="lg" />;
        } else if (condition === 'snow') {
            return <FontAwesomeIcon icon={faSnowflake} size="lg" />;
        } else if (condition === 'drizzle' || condition === 'thunderstorm') {
            return <FontAwesomeIcon icon={faMeteor} size="lg" />;
        } else {
            return null;
        }
    };

    const myLocation = () => {
        if (!weather) return 'Australia';
        return weather.name;
    }

    return (

    <div className={`hero-section text-light`} style={{ backgroundImage: `url(${getBackgroundImage()})`}}>
        <Container>
            <Row className="justify-content-center">
                <Col md={8} className="text-center">
                    <h1>SONAM DARGAY</h1>
                    <h3>Software Developer</h3>
                    <p>I am a software developer from The Kingdom of Bhutan. Currently, I am pursuing my masters degree in Information Technology in Queensland University of Technology, {myLocation()} {getWeatherIcon()}</p>
                    <Button variant="light" size="lg">
                        <Link to="/about" className="text-decoration-none text-dark">More About Me</Link>
                    </Button>
                    {' '}
                    <Button variant="light" size="lg">
                        <Link to="/resume" className="text-decoration-none text-dark">View Resume</Link>
                    </Button>
                </Col>
                <Col md={4} className="text-center">
                    <Image src={heroImage} alt="Sonam Dargay" thumbnail />
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Home