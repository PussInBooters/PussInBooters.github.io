import {
    Box, 
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
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
                Image Processing
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;