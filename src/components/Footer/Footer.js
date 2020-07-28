import React from 'react';
import { Container, Row } from 'react-bootstrap';


const footerCont = {
    backgroundColor:'#000',
    padding:' 20px 0 40px',
    color: 'hsla(0,0%,100%,.7)',
    fontSize: '0.8rem',

}


const footer = () => {
    return (
        <footer style={footerCont}>
            <Container >
                <Row>
                    <p style={{ textAlign:'center', margin:'auto'}}>
                        blog.iichub.org &copy; 2020
                    </p>
                </Row>
            </Container>
        </footer>
    )
}

export default footer