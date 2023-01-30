import { Col, Row } from "reactstrap";
import { selectAllMenuItems } from "../slices/menuSlice";


const MenuRight = ({ color, color2, color3 }) => {

    const pizzaItems = selectAllMenuItems().filter((obj) => obj.type === 'pizza');
    const saladItems = selectAllMenuItems().filter((obj) => obj.type === 'salad'); const sideItems = selectAllMenuItems().filter((obj) => obj.type === 'side');
    const dessertItems = selectAllMenuItems().filter((obj) => obj.type === 'dessert');



    return (
        <Col className="me-2">
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
                    <div key={items.id}>
                        <Row className="foodItem mt-2">
                            <Col sm='6' className=''
                            >
                                <span

                                    className={`${items.glutenFree && color ? 'highlightGF' : ''}${items.dairyFree && color2 ? 'highlightDF' : ''}${items.soyFree && color3 ? 'highlightSF' : ''}`}
                                >{items.name}
                                </span>

                            </Col>
                            <Col sm='6' className='text-end'
                            >
                                <span >
                                    {items.price}
                                </span>
                            </Col>
                            <Col className="ingredients"
                            >
                                <span>
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
                    <div key={items.id}>
                        <Row className="foodItem mt-2">
                            <Col sm='6' className=''
                            >
                                <span

                                    className={`${items.glutenFree && color ? 'highlightGF' : ''}${items.dairyFree && color2 ? 'highlightDF' : ''}${items.soyFree && color3 ? 'highlightSF' : ''}`}
                                >{items.name}
                                </span>

                            </Col>
                            <Col sm='6' className='text-end'
                            >
                                <span >
                                    {items.price}
                                </span>
                            </Col>
                            <Col className="ingredients"
                            >
                                <span>
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
                    <div key={items.id}>
                        <Row className="foodItem mt-2">
                            <Col sm='6' className=''
                            >
                                <span

                                    className={`${items.glutenFree && color ? 'highlightGF' : ''}${items.dairyFree && color2 ? 'highlightDF' : ''}${items.soyFree && color3 ? 'highlightSF' : ''}`}
                                >{items.name}
                                </span>

                            </Col>
                            <Col sm='6' className='text-end'
                            >
                                <span >
                                    {items.price}
                                </span>
                            </Col>
                            <Col className="ingredients"
                            >
                                <span>
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
                    <div key={items.id}>
                        <Row className="foodItem mt-2">
                            <Col sm='6' className=''
                            >
                                <span

                                    className={`${items.glutenFree && color ? 'highlightGF' : ''}${items.dairyFree && color2 ? 'highlightDF' : ''}${items.soyFree && color3 ? 'highlightSF' : ''}`}
                                >{items.name}
                                </span>

                            </Col>
                            <Col sm='6' className='text-end'
                            >
                                <span >
                                    {items.price}
                                </span>
                            </Col>
                            <Col className="ingredients"
                            >
                                <span>
                                    {items.ingredients}
                                </span>
                            </Col>
                        </Row>
                    </div>
                );
            })}

        </Col>
    )
};

export default MenuRight;