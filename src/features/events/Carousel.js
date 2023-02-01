import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';


const EventCarousel = () => {
    const events = useSelector((state) => {
        return state.events.eventsArray;
    })

    return (
        <Row>
            <Col md={{ size: 5, offset: 4 }} className='mt-5' >
                <Carousel axis='vertical' infiniteLoop autoPlay interval={5000} transitionTime='1500'>
                    {events.map((arr, idx) => {
                        return (
                            <div key={idx}>
                                <img src={arr.image} className='d-block w-100' />
                                <a href={`#${arr.id}`}>
                                    <div className='legend'>
                                        <h5>{arr.name}</h5>
                                        <p>{arr.headline}</p>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </Carousel>
            </Col>
        </Row>
    );
};

export default EventCarousel;