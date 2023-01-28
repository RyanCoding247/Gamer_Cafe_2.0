import { Container, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";
import FeaturedEvent from "../events/FeaturedEvent";
import HomeEventsList from "../events/HomeEventsList";

const HomePage = () => {
    return (
        <>
            <Container fluid>
                <SubHeader current='Home' />
            </Container>
            <Container>
                <Row>
                    <FeaturedEvent />
                    <HomeEventsList />
                </Row>
            </Container>
        </>
    )
}

export default HomePage;