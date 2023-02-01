import { CardBody, CardDeck, CardHeader, Col, Row } from "reactstrap";
import { useSelector } from "react-redux";


const GamesList = ({ page1, page2 }) => {


    const allGames = useSelector((state) => {
        return state.games.gamesArray
    })

    return (
        <Col className="gameIndex gamesContainer">
            <Row>
                <Col>
                    <CardDeck className="gameCard">
                        <CardHeader>
                            {page1 ? (
                                <h1 className="text-center text-danger">Classic Games</h1>
                            ) : (
                                <h1 className="text-center text-danger">Modern Games</h1>
                            )
                            }
                            <h1 className="text-center text-danger"></h1>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs='6' className="gamesList">
                                    <ul className="list-group">
                                        {allGames.map((items) => {
                                            return (
                                                page1 && items.page === 1.1 ? (
                                                    <li className="list-group-item" key={items.id}>
                                                        {items.name}
                                                    </li>
                                                ) : page2 && items.page === 2.1 ? (
                                                    <li className="list-group-item" key={items.id}>
                                                        {items.name}
                                                    </li>
                                                ) : ''
                                            );
                                        })}
                                    </ul>
                                </Col>
                                <Col xs='6' className="gamesList">
                                    <ul className="list-group">
                                        {allGames.map((items) => {
                                            return (
                                                page1 && items.page === 1.2 ? (
                                                    <li className="list-group-item" key={items.id}>
                                                        {items.name}
                                                    </li>
                                                ) : page2 && items.page === 2.2 ? (
                                                    <li className="list-group-item" key={items.id}>
                                                        {items.name}
                                                    </li>
                                                ) : ''
                                            );
                                        })}
                                    </ul>
                                </Col>
                            </Row>
                        </CardBody>
                    </CardDeck>
                </Col>
            </Row>
        </Col>);
}

export default GamesList;