import { useSelector } from "react-redux";
import { Button, Card, CardBody, CardDeck, CardGroup, CardImg, CardText, CardTitle, Col } from "reactstrap";


const RoomCard = () => {

    const rooms = useSelector((state) => {
        return state.rooms.roomsArray
    })

    return (
        <CardGroup>
            {rooms.map((arr) => {
                return (
                    <Card className='mx-4 mt-5' color="danger" key={arr.id}>
                        <CardImg
                            className="img-fluid bgcard"
                            top
                            src={arr.image}
                            alt={`${arr.name} illustration`} />
                        <CardBody className="cardRoom mb-5 bgcard">
                            <CardTitle tag='h3' className="text-center mt-4">
                                {arr.name}
                            </CardTitle>
                            <CardText className="d-none d-md-block mt-4 text-center">
                                {arr.price}
                            </CardText>
                            <CardText className="d-none d-md-block">
                                {arr.content}
                            </CardText>
                        </CardBody>
                        <Col xs={{ size: '4', offset: '4' }}>
                            <Button className="btn-dark">
                                <span style={{ color: 'red' }}>Reserve Room</span>
                            </Button>
                        </Col>
                    </Card>
                )
            })}
        </CardGroup>
    )
};

export default RoomCard;