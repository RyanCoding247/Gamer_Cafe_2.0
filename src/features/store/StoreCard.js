import { Button, Card, CardBody, CardGroup, CardImg, CardText, CardTitle, Col } from "reactstrap";
import { useSelector } from "react-redux";

const StoreCard = ({ setModalOpen, setMySelection }) => {

    const store = useSelector((state) => {
        return state.store.storeArray
    })
    return (
        <>
            {store.map((arr, idx) => {
                return (
                    <Col sm='6' className="mt-3 mb-4" key={arr.id} >
                        <CardGroup>
                            <Card className='shopCard' color="dark" >
                                <CardImg
                                    src={arr.image}
                                    alt={`${arr.name} illustrated shirt`}
                                />
                                <CardBody className="text-center">
                                    <CardTitle tag='h5' >{arr.name}</CardTitle>
                                    <CardText>{arr.price}</CardText>
                                    <Button 
                                    className="btn-danger"
                                    type="submit"
                                    onClick={() => {
                                        setModalOpen(true);
                                        setMySelection(idx);
                                    }}                                    
                                    >
                                        Purchase
                                    </Button>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </Col>
                );
            })};

        </>
    )
};

export default StoreCard;