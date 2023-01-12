import React from 'react'
import AboutImg from '../../img/main.jpg';
import { Container,Row,Col } from 'react-bootstrap'

const About = () => {
  return (
    <section id="about-us">
        <Container>
            <Row>
                <Col md={4} lg={4}>
                    <div className="about-img">
                        <img src={AboutImg} alt=""/>
                    </div>
                </Col>
                <Col md={8} lg={8}>
                    <div className="about-sec">
                        <div className="title">
                            
                            <h2>ABOUT US</h2>
                            
                            <p>Rathinam School of Architecture (RSA), affiliated to Anna University is one of the top Architecture schools in Coimbatore, with strong presence nationally and internationally. The school has built a tradition in fostering excellence in technical education in the domain of architecture. We invite you to explore the vibrant nd diverse community that is deeply focused on quality and holism. RSA is  a student-centris institution located in a campus unlike any other to become an independent and skillfull individual. We focus on transdisciplinaty experiences and get students ready to shape tomorrow's world. We encourage students to participate in national and international competitions that enhances their exposure. RSA is located in a scenic campus with infrastructure and facilities amiable to students.New year paves way to new beginnings and new dreams that gives us new opportunities to grow.</p>
                            
                            <p>We at RSA would like to extend the opportunity to young architects to grow along with on this new journey. AVIVA 23' allows you to explore new and fresh ideas this year. New year implies to change and to alleviate more possibilities and to deliver them in diverse forms. We at RSA have framed some intriguing design competitions to explore, change and grow towards future.</p>
                        
                        </div>
                    </div>
                </Col>
            </Row>    
        </Container>
    </section>
  )
}

export default About
