import { Button, Col, Row } from "reactstrap";

const GameButtons = ({ setPage1, setPage2 }) => {

    return (
        <Row className="mb-4">
            <Col xs={{ offset: 4, size: 3 }} >
                <Button
                    type="button"
                    onClick={() => {
                        setPage1(true);
                        setPage2(false)
                    }}
                    className="btn-danger btn-lg">Page 1</Button>
            </Col>
            <Col xs='3'>
            <Button
                    type="button"
                    onClick={() => {
                        setPage1(false);
                        setPage2(true)
                    }}
                    className="btn-danger btn-lg">Page 2</Button>
            </Col>
        </Row>

    );
}


export default GameButtons;