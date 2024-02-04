import {
    Box, 
    NavBarContainer,
    Row,
    Column,
    NavBarLink,
} from "./NavBarStyles";

const NavBar = () => {
    return (
        <Box>
            <NavBarContainer>
                <Row>
                    <Column>
                        <NavBarLink href="#intro">Introduction</NavBarLink>
                    </Column>
                    <Column>
                        <NavBarLink href="#process">Processing</NavBarLink>
                    </Column>
                    <Column>
                        <NavBarLink href="#howto">How To</NavBarLink>
                    </Column>
                    <Column>
                        <NavBarLink href="#about">About Us</NavBarLink>
                    </Column>
                </Row>
            </NavBarContainer>
        </Box>
    );
};
export default NavBar;