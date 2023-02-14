import { useState } from "react";
import { Col, Row } from "reactstrap";
import StoreCard from "./StoreCard";
import StoreForm from "./StoreForm";



const DisplayStore = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [mySelection, setMySelection] = useState(0);

    return (
        <>
            <Row>
                <Col className="mb-5 mt-2 text-center mx-5">
                    <h1 className="shopCard shopRound">Purchase Goods Here</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={{ size: '10', offset: 1 }} md={{ size: '8', offset: 2 }}>
                    <Row className="shopCard shopRound mx-5">
                        <StoreCard setModalOpen={setModalOpen} setMySelection={setMySelection} />
                    </Row>
                </Col>
            </Row>
            <StoreForm
                setModalOpen={setModalOpen}
                mySelection={mySelection}
                modalOpen={modalOpen}
            />

        </>
    )
};

export default DisplayStore;