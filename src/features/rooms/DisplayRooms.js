import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import RoomCard from "./RoomCard";
import RoomForm from "./RoomForm";


const DisplayRooms = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [mySelection, setMySelection] = useState(0);

    return (
        <Row>
            <Col className="mx-5">
                <RoomCard setModalOpen={setModalOpen} setMySelection={setMySelection} />
                <RoomForm
                    setModalOpen={setModalOpen}
                    mySelection={mySelection}
                    modalOpen={modalOpen}
                />
            </Col>
        </Row>
    )
};

export default DisplayRooms;