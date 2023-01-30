import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import MenuDisplay from "../menu/MenuDisplay";


const MenuPage = () => {
    return (
        <>
            <Container fluid>
                <SubHeader current='Menu' />
            </Container>
            <Container>
                <MenuDisplay />
            </Container>
        </>
    )
}

export default MenuPage;