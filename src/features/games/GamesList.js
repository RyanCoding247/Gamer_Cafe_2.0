import { Button, CardBody, CardDeck, CardHeader, Col, Row } from "reactstrap";
import { useState } from "react";
import { selectAllGames } from "../slices/gameSlice";


export const GamesList = () => {

    const allGames = selectAllGames();


    return (
        <>
            <Row className="mb-4">
                <Col xs={{offset: 4, size: 3}} >
                    <Button type="button" className="btn-danger">Page 1</Button>
                </Col>
                <Col xs='3'>
                    <Button type="button" className="btn-danger">Page 2</Button>
                </Col>
            </Row>
            <Row className="gamesContainer">
                <Col md='3'>
                    <Row className="d-flex flex-column h-100">
                        <Col className="h-100">
                            <img alt='An image' src={allGames[3].image} className='img-fluid mt-4' />
                        </Col>
                        <Col className="h-100">
                            <img alt='An image' src={allGames[5].image} className='img-fluid mt-3 mb-4' />
                        </Col>
                    </Row>
                </Col>
                <Col md='6' className="gameIndex">
                    <Row>
                        <Col>
                            <CardDeck className="gameCard">
                                <CardHeader>
                                    <h1 className="text-center">Classic Games</h1>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col sm='6' className="gamesList">
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col sm='6' className="gamesList" xs='6'>
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                                <li className="list-group-item">
                                                    pac-man
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </CardDeck>

                        </Col>
                    </Row>
                </Col>
                <Col md='3'>
                    <Row className="d-flex flex-column h-100">
                        <Col className="h-100">
                            <img alt='An image' src={allGames[3].image} className='img-fluid mt-4' />
                        </Col>
                        <Col className="h-100">
                            <img alt='An image' src={allGames[5].image} className='img-fluid mt-3 mb-4' />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}