import { useSelector } from "react-redux";
import { Button, Card, CardBody, CardDeck, CardGroup, CardImg, CardText, CardTitle, Col } from "reactstrap";


const RoomCard = ({ setModalOpen, setMySelection }) => {

    const rooms = useSelector((state) => {
        return state.rooms.roomsArray
    })

    return (
        <CardGroup>
            {rooms.map((arr, idx) => {
                return (
                    <Card className='mx-4 mt-5' key={arr.id}>
                        <CardImg
                            className="img-fluid"
                            top
                            src={arr.image}
                            alt={`${arr.name} illustration`} />
                        <CardBody className="mb-5">
                            <CardTitle tag='h3' className="text-center mt-4 tribal-dragon">
                                {arr.name}
                            </CardTitle>
                            <CardText className="d-none d-md-block mt-4 text-center">
                                {arr.price}
                            </CardText>
                            <CardText className="d-none d-md-block">
                                {arr.content}
                            </CardText>
                        </CardBody>
                        <Col className='d-flex justify-content-center'>
                            <Button 
                            className="btn-dark"
                            onClick={() => {
                                setModalOpen(true);
                                setMySelection(idx);
                            }}                                    
                            >
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