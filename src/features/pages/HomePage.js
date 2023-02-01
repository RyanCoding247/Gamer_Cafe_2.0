import { Container, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";
import FeaturedEvent from "../home/FeaturedEvent";
import HomeEventsList from "../home/HomeEventsList";

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