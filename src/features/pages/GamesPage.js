import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import DisplayGames from "../games/DisplayGames";


const GamesPage = () => {
    return (
        <>
            <Container fluid>
                <SubHeader current='Games' />
            </Container>
            <Container>
                <DisplayGames />
            </Container>
        </>
    )
}

export default GamesPage;