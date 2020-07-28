import React from 'react'
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'
import { Container, Row, Col } from 'react-bootstrap'

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Nav />
                <Container>
                    <Row style={{ padding: '50px 10px' }}>
                        <h2 style={{ margin: 'auto' }}>iichub blog </h2>
                    </Row>
                    <Row style={{ margin: '60px 0' }}>
                        <Col xs={12}  md={8}>
                            <Row>
                                <Col xs={12} md={6} lg={4} >
                                    <Card />
                                </Col>
                                <Col xs={12} md={6} lg={4} >
                                    <Card />
                                </Col>
                                <Col xs={12} md={6} lg={4} >
                                    <Card />
                                </Col>
                                <Col xs={12} md={6} lg={4} >
                                    <Card />
                                </Col>
                                <Col xs={12} md={6} lg={4} >
                                    <Card />
                                </Col>
                                <Col xs={12} md={6} lg={4} >
                                    <Card />
                                </Col>
                                <Col xs={12} md={6} lg={4} >
                                    <Card />
                                </Col>
                                <Col xs={12} md={6} lg={4} >
                                    <Card />
                                </Col>
                                <Col xs={12} md={6} lg={4} >
                                    <Card />
                                </Col>


                            </Row>
                        </Col>
                        <Col md={4} xs={12} style={{ backgroundColor:'#F5F5F5'}}>

                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}
export default Blog