import { Container, Col, Row } from "reactstrap";
import EventCarousel from "./Carousel";
import EventsList from "./EventsList";


const DisplayEvents = () => {


    return (
        <Container>
            <EventCarousel />
            <EventsList />
        </Container>
    )
};

export default DisplayEvents;