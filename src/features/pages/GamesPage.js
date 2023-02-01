import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import DisplayGames from "../games/DisplayGames";


const GamesPage = () => {
    return (
        <>
            <Container fluid>
                <SubHeader current='Games' />
                <DisplayGames />
            </Container>
        </>
    )
}

export default GamesPage;