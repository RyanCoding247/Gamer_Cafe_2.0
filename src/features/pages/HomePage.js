import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import FeaturedEvent from "../events/FeaturedEvent";
import HomeEventsList from "../events/HomeEventsList";

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <FeaturedEvent />
            <HomeEventsList />
        </Container>
    )
}

export default HomePage;