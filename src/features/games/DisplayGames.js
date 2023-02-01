import { useState } from "react";
import { Row } from "reactstrap";
import GameButtons from "./GameButtons";
import GamesImgsLeft from "./GamesImgsLeft";
import GamesImgsRight from "./GamesImgsRight";
import GamesList from "./GamesList";

const DisplayGames = () => {

    const [page1, setPage1] = useState(true);
    const [page2, setPage2] = useState(false);


    return (
        <>
            <GameButtons setPage1={setPage1} setPage2={setPage2} />
            <Row>
                <GamesImgsLeft page1={page1} page2={page2} />
                <GamesList page1={page1} page2={page2} />
                <GamesImgsRight page1={page1} page2={page2} />
            </Row>
        </>
    );
}

export default DisplayGames;