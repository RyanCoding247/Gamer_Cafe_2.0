import { Col, Row } from "reactstrap";
import { useState } from "react";
import MenuButton from "./MenuButtons";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";

const MenuDisplay = () => {

    const [color, setColor] = useState('');
    const [color2, setColor2] = useState('');
    const [color3, setColor3] = useState('');

    return (
        <>
            <MenuButton setColor={setColor} setColor2={setColor2} setColor3={setColor3} />
            <div className="menu">
                <Row>
                    <Col>
                        <h1 className="text-center">Gamer Cafe Menu</h1>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <MenuLeft color={color} color2={color2} color3={color3} />
                    <MenuRight color={color} color2={color2} color3={color3} />
                </Row>
            </div>
        </>
    )
};

export default MenuDisplay;