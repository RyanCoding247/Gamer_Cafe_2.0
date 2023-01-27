import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { selectFeaturedEvent } from "../slices/homeSlice";



const FeaturedEvent = () => {

    const event = selectFeaturedEvent();
    const { image, name, date, alt } = event;

    return (
        <Row>
            <Col sm='4' md='3' lg='5' className="shopCard">
                <h5>{name}</h5>
                <p>{date}:</p>
                <p>Join us at Gamer Cafe for a night of revelry and joy in only your finest fantasy wear! No costume? No worries, we can provide!</p>
                <Link to='events'>
                    <img
                        src={image}
                        className='mainEvent img-fluid w-100'
                        alt={alt}
                    />
                </Link>
            </Col>
        </Row>
    )
}

export default FeaturedEvent;