import React from 'react'
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'
import { Container, Row, Col } from 'react-bootstrap'

class BlogView extends React.Component {
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
                   
                </Container>
                <Footer />
            </div>
        )
    }
}
export default BlogView