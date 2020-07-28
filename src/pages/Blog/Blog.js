import React from 'react'
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'
import { Container, Row, Col, Image } from 'react-bootstrap'
import MainImage from '../../assets/images/photo2.png'
import './Blog.css'

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
                <Container className="blog-container">

                    <Row>
                        <Col xs={12} md={8}>
                            <Row className="main-section">
                            <Col >
                                <Image src={MainImage} fluid />
                                <div className="image-mask">
                                <span>This is the title of the trending blog post for the day </span>
                                </div>
                           </Col>
                            </Row>
                            <Row className="row-card-container">
                                <Col xs={6} md={6} lg={4} >
                                    <Card />
                                </Col>
                                <Col xs={6} md={6} lg={4} >
                                    <Card />
                                </Col>
                                <Col xs={6} md={6} lg={4} >
                                    <Card />
                                </Col>
                                <Col xs={6} md={6} lg={4} >
                                    <Card />
                                </Col>
                                <Col xs={6} md={6} lg={4} >
                                    <Card />
                                </Col>
                                <Col xs={6} md={6} lg={4} >
                                    <Card />
                                </Col>
                                <Col xs={6} md={6} lg={4} >
                                    <Card />
                                </Col>
                                <Col xs={6} md={6} lg={4} >
                                    <Card />
                                </Col>
                                <Col xs={6} md={6} lg={4} >
                                    <Card />
                                </Col>


                            </Row>
                        </Col>
                        <Col md={4} xs={12} style={{ backgroundColor: '#F5F5F5' }}>

                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}
export default Blog