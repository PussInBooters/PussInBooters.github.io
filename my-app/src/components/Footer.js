import {
    Box, 
    FooterContainer,
    Row,
    Column,
    FooterLink,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <h1
                style={{
                    color: "#fff1f6",
                    textAlign: "center",
                    marginTop: "10px",
                }}>
                Barbie Image Processing
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <FooterLink href="#intro">Introduction</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="#process">Processing</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="#howto">How To</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="#about">About Us</FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;