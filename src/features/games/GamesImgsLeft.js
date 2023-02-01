import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";

const GamesImgsLeft = ({ page1, page2 }) => {

    const allGames = useSelector((state) => {
        return state.games.gamesArray
    });

    return (
        <>
            <Col sm='1' className="d-xxl-block d-none" />
            <Col xs='2' className="d-md-block d-none gamesContainer">
                <Row className="d-flex flex-column mt-2 mb-2">
                    {allGames.map((items) => {
                        return (
                            page1 && items.featured === 1.1 ? (
                                <Col key={items.id}>
                                    <img alt='1' src={items.image} className='img-fluid mt-3' />
                                </Col>
                            ) : page2 && items.featured === 2.1 ? (
                                <Col key={items.id}>
                                    <img alt='1' src={items.image} className='img-fluid mt-3' />
                                </Col>
                            ) : ''
                        );
                    })}
                </Row>
            </Col>
        </>
    )
};

export default GamesImgsLeft;