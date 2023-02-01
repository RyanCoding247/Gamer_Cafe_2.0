import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";

const EventsList = () => {

    const events = useSelector((state) => {
        return state.events.eventsArray;
    })

    return (
        <>
            {events.map((arr, idx) => {
                return (
                    <Row className="row-content align-items-center mt-3 eventList" >
                        <Col sm='4' md='3' >
                        <img className="w-75" src={arr.image} id={arr.id}/>
                        </Col>
                        <Col>
                        <h2 class="text-sm-right">{arr.date}</h2>
                        </Col>
                        <Col className="media">
                            <div className="media-body align-self-center">
                                <h3 className="text-center">{arr.name}</h3>
                                <p className="d-none d-md-block">{arr.summary}</p>
                            </div>
                        </Col>
                    </Row>
                )
            })}
        </>
    )
};

export default EventsList;