import DisplayEvents from "../events/DisplayEvents";
import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";


const EventsPage = () => {
    return (
        <>
            <Container fluid>
                <SubHeader current='Events' />
            </Container>
            <Container>
                <DisplayEvents />
            </Container>
        </>
    )
}

export default EventsPage;