import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import FeaturedEvent from "../events/FeaturedEvent";

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <FeaturedEvent />
        </Container>
    )
}

export default HomePage;