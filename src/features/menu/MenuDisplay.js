import { Button, Col, Row } from "reactstrap";
import { selectAllMenuItems } from "../slices/menuSlice";
import { useState } from "react";

const MenuDisplay = () => {


    const [color, setColor] = useState('');
    const [color2, setColor2] = useState('');
    const [color3, setColor3] = useState('');

    const softDrinkItems = selectAllMenuItems().filter((obj) => obj.type === 'soft');
    const teaItems = selectAllMenuItems().filter((obj) => obj.type === 'tea');
    const classicItems = selectAllMenuItems().filter((obj) => obj.type === 'classic');
    const texMexItems = selectAllMenuItems().filter((obj) => obj.type === 'texmex');
    const pizzaItems = selectAllMenuItems().filter((obj) => obj.type === 'pizza');
    const saladItems = selectAllMenuItems().filter((obj) => obj.type === 'salad'); const sideItems = selectAllMenuItems().filter((obj) => obj.type === 'side');
    const dessertItems = selectAllMenuItems().filter((obj) => obj.type === 'dessert');

    return (
        <>
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

            <div className="menu">
                <Row>
                    <Col>
                        <h1 className="text-center">Gamer Cafe Menu</h1>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col className="menuLeft ms-3" xs='6'>
                        <div className="subHeader text-center">All-Day Delights</div>
                        <br />
                        <div className="subSubHeader text-center">The Classic American</div>
                        {softDrinkItems.map((items, idx) => {
                            return (
                                <div key={`${idx} 0`}>
                                    <Row className="foodItem" key={`${idx} 1`}>
                                        <Col sm='6' className=''
                                            key={`${idx} 2`}>
                                            <span key={`${idx} 3`}
                                        >{items.name}
                                            </span>
                                        </Col>
                                        <Col sm='6' className='text-end'
                                            key={`${idx} 4`}>
                                            <span key={`${idx} 5`}>
                                                {items.price}
                                            </span>
                                        </Col>
                                        <Col className="ingredients"
                                            key={`${idx} 6`}>
                                            <span key={`${idx} 7`}>
                                                {items.ingredients}
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })}
                        <br />
                        <div className="subSubHeader text-center">Tea</div>
                        {teaItems.map((items, idx) => {
                            return (
                                <div key={`${idx} 0`}>
                                    <Row className="foodItem" key={`${idx} 1`}>
                                        <Col sm='6' className=''
                                            key={`${idx} 2`}>
                                            <span key={`${idx} 3`}>{items.name}
                                            </span>
                                        </Col>
                                        <Col sm='6' className='text-end'
                                            key={`${idx} 4`}>
                                            <span key={`${idx} 5`}>
                                                {items.price}
                                            </span>
                                        </Col>
                                        <Col className="ingredients"
                                            key={`${idx} 6`}>
                                            <span key={`${idx} 7`}>
                                                {items.ingredients}
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })}
                        <div className="subHeader text-center">All-Day Delights</div>
                        <br />
                        <div className="subSubHeader text-center">The Classic American</div>
                        {classicItems.map((items, idx) => {
                            return (
                                <div key={`${idx} 0`}>
                                    <Row className="foodItem mt-2" key={`${idx} 1`}>
                                        <Col sm='6' className=''
                                            key={`${idx} 2`}>
                                            <span 
                                            key={`${idx} 3`}
                                            className={`${items.glutenFree&&color ? 'highlightGF' : ''}${items.dairyFree&&color2 ? 'highlightDF' : ''}${items.soyFree&&color3 ? 'highlightSF' : ''}`}
                                        >{items.name}
                                            </span>

                                        </Col>
                                        <Col sm='6' className='text-end'
                                            key={`${idx} 4`}>
                                            <span key={`${idx} 5`}>
                                                {items.price}
                                            </span>
                                        </Col>
                                        <Col className="ingredients"
                                            key={`${idx} 6`}>
                                            <span key={`${idx} 7`}>
                                                {items.ingredients}
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })}
                        <Row>
                            <Col className="hr mx-5 my-4" />
                        </Row>
                        <div className="subSubHeader text-center mt-3 mb-3">Delicious TexMex</div>
                        {texMexItems.map((items, idx) => {
                            return (
                                <div key={`${idx} 0`}>
                                    <Row className="foodItem mt-2" key={`${idx} 1`}>
                                        <Col sm='6' className=''
                                            key={`${idx} 2`}>
                                            <span key={`${idx} 3`}
                                            className={`${items.glutenFree&&color ? 'highlightGF' : ''}${items.dairyFree&&color2 ? 'highlightDF' : ''}${items.soyFree&&color3 ? 'highlightSF' : ''}`}>{items.name}
                                            </span>
                                        </Col>
                                        <Col sm='6' className='text-end'
                                            key={`${idx} 4`}>
                                            <span key={`${idx} 5`}>
                                                {items.price}
                                            </span>
                                        </Col>
                                        <Col className="ingredients"
                                            key={`${idx} 6`}>
                                            <span key={`${idx} 7`}>
                                                {items.ingredients}
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })}
                    </Col>
                    <Col>
                        <div className="subSubHeader text-center mb-5">Build Your Own Pizza</div>
                        <Row>
                            <Col sm='4' className="text-center foodItem">
                                8"
                            </Col>
                            <Col sm='4' className="text-center foodItem">
                                12"
                            </Col>
                            <Col sm='4' className="text-center foodItem">
                                16"
                            </Col>
                        </Row>
                        <Row>
                            <Col sm='4' className="text-center foodItem">
                                8.00
                            </Col>
                            <Col sm='4' className="text-center foodItem">
                                10.00
                            </Col>
                            <Col sm='4' className="text-center foodItem">
                                12.00
                            </Col>
                        </Row>
                        {pizzaItems.map((items, idx) => {
                            return (
                                <div key={`${idx} 0`}>
                                    <Row className="foodItem mt-4 me-1" key={`${idx} 1`}>
                                        <Col sm='6' className=''
                                            key={`${idx} 2`}>
                                            <span key={`${idx} 3`}>{items.name}
                                            </span>
                                        </Col>
                                        <Col sm='6' className='text-end'
                                            key={`${idx} 4`}>
                                            <span key={`${idx} 5`}>
                                                {items.price}
                                            </span>
                                        </Col>
                                        <Col className="ingredients"
                                            key={`${idx} 6`}>
                                            <span key={`${idx} 7`}>
                                                {items.ingredients}
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })}
                        <Row>
                            <Col className="hr mx-5 my-4" />
                        </Row>
                        <div className="subSubHeader text-center mb-5 mt-3">Salads</div>
                        {saladItems.map((items, idx) => {
                            return (
                                <div key={`${idx} 0`}>
                                    <Row className="foodItem me-1 mt-2" key={`${idx} 1`}>
                                        <Col sm='6' className=''
                                            key={`${idx} 2`}>
                                            <span key={`${idx} 3`}
                                            className={`${items.glutenFree&&color ? 'highlightGF' : ''}${items.dairyFree&&color2 ? 'highlightDF' : ''}${items.soyFree&&color3 ? 'highlightSF' : ''}`}>{items.name}
                                            </span>
                                        </Col>
                                        <Col sm='6' className='text-end'
                                            key={`${idx} 4`}>
                                            <span key={`${idx} 5`}>
                                                {items.price}
                                            </span>
                                        </Col>
                                        <Col className="ingredients"
                                            key={`${idx} 6`}>
                                            <span key={`${idx} 7`}>
                                                {items.ingredients}
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })}
                        <Row>
                            <Col className="hr mx-5 my-4" />
                        </Row>
                        <div className="subSubHeader text-center mb-5 mt-3">Sides</div>
                        {sideItems.map((items, idx) => {
                            return (
                                <div key={`${idx} 0`}>
                                    <Row className="foodItem me-1 mt-1" key={`${idx} 1`}>
                                        <Col sm='6' className=''
                                            key={`${idx} 2`}>
                                            <span key={`${idx} 3`}
                                            className={`${items.glutenFree&&color ? 'highlightGF' : ''}${items.dairyFree&&color2 ? 'highlightDF' : ''}${items.soyFree&&color3 ? 'highlightSF' : ''}`}>{items.name}
                                            </span>
                                        </Col>
                                        <Col sm='6' className='text-end'
                                            key={`${idx} 4`}>
                                            <span key={`${idx} 5`}>
                                                {items.price}
                                            </span>
                                        </Col>
                                        <Col className="ingredients"
                                            key={`${idx} 6`}>
                                            <span key={`${idx} 7`}>
                                                {items.ingredients}
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })}
                                                <Row>
                            <Col className="hr mx-5 my-4" />
                        </Row>
                        <div className="subSubHeader text-center mb-3 mt-3">Desserts</div>
                        {dessertItems.map((items, idx) => {
                            return (
                                <div key={`${idx} 0`}>
                                    <Row className="foodItem me-1 mt-2" key={`${idx} 1`}>
                                        <Col sm='6' className=''
                                            key={`${idx} 2`}>
                                            <span key={`${idx} 3`}
                                            className={`${items.glutenFree&&color ? 'highlightGF' : ''}${items.dairyFree&&color2 ? 'highlightDF' : ''}${items.soyFree&&color3 ? 'highlightSF' : ''}`}>{items.name}
                                            </span>
                                        </Col>
                                        <Col sm='6' className='text-end'
                                            key={`${idx} 4`}>
                                            <span key={`${idx} 5`}>
                                                {items.price}
                                            </span>
                                        </Col>
                                        <Col className="ingredients"
                                            key={`${idx} 6`}>
                                            <span key={`${idx} 7`}>
                                                {items.ingredients}
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })}

                    </Col>
                </Row>
            </div>
        </>
    )
};

export default MenuDisplay;