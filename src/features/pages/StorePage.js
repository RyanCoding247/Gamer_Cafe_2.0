import { Container } from "reactstrap";
import DisplayStore from "../store/DisplayStore";
import SubHeader from "../components/SubHeader";

const StorePage = () => {
    return (
        <Container fluid>
            <SubHeader current='Store' />
            <DisplayStore />
        </Container>
    )
}

export default StorePage;