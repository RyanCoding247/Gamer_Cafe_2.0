import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { selectAllEvents } from "../slices/homeSlice";

const HomeEventsList = () => {
    const events = selectAllEvents();
    return (
        <>
            <Col sm={{size: 4, offset: 2}} lg='5' className='shopCard text-center mt-3'>
                <h3>Other Upcoming Events:</h3>
                {events.map((item, idx) => {
                    return (
                        (item.id === parseInt(1) || item.id === parseInt(2) || item.id === parseInt(3)) && (
                            <Row key={idx}>
                                <Col>
                                    <span>{item.name}</span>
                                    <Link to='events'>
                                        <img
                                            src={item.image}
                                            className='otherEventsImg w-100'
                                            alt="Event: Dancing Tournament"
                                        />
                                    </Link>
                                </Col>
                            </Row>
                        )
                    );
                })}
            </Col>
            <Col></Col>
        </>
    )
};

export default HomeEventsList;




