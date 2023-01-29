import { Button, CardBody, CardDeck, CardHeader, Col, Row } from "reactstrap";
import { useState } from "react";
import { GamesStyle } from "./GamesStyle";


export const GamesList = () => {

    const [color, setColor] = useState('');

    return (
        <>
            <Button onClick={() => setColor('gluten')}>Gluten</Button>
            <Button onClick={() => setColor('soy')}>Soy</Button>
            <Row>
                <Col>
                    <CardDeck className="gameCard">
                        <CardHeader>
                            <h1>Classic Games</h1>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col sm='6'>

                                </Col>
                            </Row>
                        </CardBody>
                    </CardDeck>

                </Col>
                <Col>
                    <div>
                        <div>
                            <span className={GamesStyle( color )}>First</span>
                        </div>
                    </div></Col>
            </Row>
        </>
    );
}