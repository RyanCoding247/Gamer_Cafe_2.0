import { Button, Col, Row } from "reactstrap";

const MenuButton = ({setColor, setColor2, setColor3}) => {
    return (
    <Row>
    <Col sm={{ size: 3, offset: 1 }}>
        <Button
            className="btn-danger mt-5"
            type="button"
            onClick={() => {
                setColor('gluten');
                setColor2('');
                setColor3('');
            }}
        >
            Gluten Free
        </Button>
    </Col>
    <Col sm={{ size: 3, offset: 1 }}>
        <Button
            className="btn-danger mt-5"
            type="button"
            onClick={() => {
                setColor(null);
                setColor2('dairy');
                setColor3(null)
            }}
        >
            Dairy Free
        </Button>
    </Col>
    <Col sm={{ size: 3, offset: 1 }}>
        <Button
            className="btn-danger mt-5"
            type="button"
            onClick={() => {
                setColor('');
                setColor2('');
                setColor3('soy')
            }}
        >
            Soy Free
        </Button>
    </Col>
</Row>
    )
};

export default MenuButton;