import { Col, Row } from "reactstrap";
import { selectEventsById } from "../slices/homeSlice";
import { selectAllEvents } from "../slices/homeSlice";

const HomeEventsList = () => {
    // switch(selectEventsById())
    const events = selectAllEvents();

    <Row>
        {events.map((item, idx) => {
            return (
                (item.id === 1 ) && (
                    <Col md className='m-1' key={idx}>
                        <h1>{item.id}</h1>
                    </Col>
                )
            )
        })}
        <h1>help</h1>
    </Row>
};

export default HomeEventsList;




