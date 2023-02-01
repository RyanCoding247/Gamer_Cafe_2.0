import { Col, Container, Row } from "reactstrap";
import RoomCard from "./RoomCard";


const DisplayRooms = () => {

    return (
        <Row>
            <Col className="mx-5">
                <RoomCard />
            </Col>
        </Row>
    )
};

export default DisplayRooms;