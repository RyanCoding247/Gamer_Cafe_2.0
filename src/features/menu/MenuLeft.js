import { Row, Col } from "reactstrap";
import { selectAllMenuItems } from "../slices/menuSlice";



const MenuLeft = ({color, color2, color3}) => {
    const softDrinkItems = selectAllMenuItems().filter((obj) => obj.type === 'soft');
    const teaItems = selectAllMenuItems().filter((obj) => obj.type === 'tea');
    const classicItems = selectAllMenuItems().filter((obj) => obj.type === 'classic');
    const texMexItems = selectAllMenuItems().filter((obj) => obj.type === 'texmex');

    return (
    <Col className="menuLeft ms-3" xs='6'>
        <div className="subHeader text-center">Drinks</div>
        <br />
        <div className="subSubHeader text-center">Soft Drinks</div>
        {softDrinkItems.map((items, idx) => {
            return (
                <div key={items.id}>
                    <Row className="foodItem" >
                        <Col sm='6' className=''
                        >
                            <span
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
        <br />
        <div className="subSubHeader text-center">Tea</div>
        {teaItems.map((items, idx) => {
            return (
                <div key={items.id}>
                    <Row className="foodItem" >
                        <Col sm='6' className=''
                        >
                            <span
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
        <div className="subHeader text-center">All-Day Delights</div>
        <br />
        <div className="subSubHeader text-center">The Classic American</div>
        {classicItems.map((items, idx) => {
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
        <div className="subSubHeader text-center mt-3 mb-3">Delicious TexMex</div>
        {texMexItems.map((items, idx) => {
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
}

export default MenuLeft;