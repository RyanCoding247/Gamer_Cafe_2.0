import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { selectFeaturedEvent } from "../slices/homeSlice";



const FeaturedEvent = () => {

    const { image, name, date, alt } = selectFeaturedEvent();

    return (
        <Col sm='4' lg='5' className="shopCard mt-3">
            <h5>{name}</h5>
            <p>{date}:</p>
            <p>Join us at Gamer Cafe for a night of revelry and joy in only your finest fantasy wear! No costume? No worries, we can provide!</p>
            <Link to='events'>
                <img
                    src={image}
                    className='mainEvent w-100'
                    alt={alt}
                />
            </Link>
        </Col>
    )
}

export default FeaturedEvent;