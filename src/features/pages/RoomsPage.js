import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import DisplayRooms from "../rooms/DisplayRooms";

const RoomsPage = () => {
    return (
        <Container fluid>
            <SubHeader current='Rooms' />
            <DisplayRooms />
        </Container>
    )
}

export default RoomsPage;