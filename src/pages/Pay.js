import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import YouthHub from '../img/youth.jpg';
import Photo from '../img/photography-standard.jpg';
import Urban from '../img/urban.jpg';
import Sustain from '../img/sus.jpg';
import Sketching from '../img/photography_sketching.jpg';
import Area from '../img/entrance-area.jpg';


const datas = [
    {
        id: 1,
        title: "INTERNATIONAL YOUTH HUB",
        img: YouthHub,
        link: "/event/youth-hub",
        paymentLink: "https://rzp.io/l/PhmDAsJ"
    },
    {
        id: 2,
        title: "PHOTOGRAPHY",
        img: Photo,
        link: "/event/photography",
        paymentLink: "https://rzp.io/l/XbIUJBoUS"
    },
    {
        id: 3,
        title: "SUSTAINABLE HOUSE",
        img: Sustain,
        link: "/event/inter-sustainable",
        paymentLink: "https://rzp.io/l/oS7toGTU"
    },
];

const intra = [
    {
        id: 1,
        title: "URBAN SPACE DEVELOPMENT",
        img: Urban,
        link: "/event/urban-space-redevelopment",
        paymentLink: "https://rzp.io/l/s96pRHY6",
    },
    {
        id: 2,
        title: "SUSTAINABLE HOUSE",
        img: Sustain,
        link: "/event/sustainable-housing",
        paymentLink: "https://rzp.io/l/s96pRHY6",
    },
    {
        id: 3,
        title: "ENTRANCE AREA",
        img: Area,
        link: "/event/rathinam-entrance",
        paymentLink: "https://rzp.io/l/s96pRHY6",
    },
    {
        id: 4,
        title: "ARCHITECTURAL PHOTOGRAPHY & SKETCHING",
        img: Sketching,
        link: "/event/architecture-photography",
        paymentLink: "https://rzp.io/l/0Z6WXuaDu",
    },
    
]

const Events = () => {
  return (
    <section id="events">
      <Container>
        <Row className='mt-4 mb-4'>
            <div className='title'>
                <h2>INTER COLLEGE COMPETITION</h2>
            </div>
            {
                datas.map((data) => (
                    <Col md={4} lg={4} key={data.id} className="mb-4">
                        <Card style={{textAlign: "center"}}>
                            <Card.Img variant="top" src={data.img} />
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Link as={Link} to={data.link}>Know More</Card.Link>
                            </Card.Body>
                            <a href={data.paymentLink} target="_blank" rel="noreferrer"><Button className='patment-btn'>Register Here</Button></a>
                        </Card>
                    </Col>
                ))
            }
        </Row>
        <Row className='mt-4 mb-4'>
            <div className='title'>
                <h2>INTRA COLLEGE COMPETITION</h2>
            </div>
            {
                intra.map((data) => (
                    <Col md={4} lg={4} key={data.id} className="mb-4">
                        <Card style={{textAlign: "center"}}>
                            <Card.Img variant="top" src={data.img} />
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Link as={Link} to={data.link}>Know More</Card.Link>
                            </Card.Body>
                            <a href={data.paymentLink} target="_blank" rel="noreferrer"><Button className='patment-btn'>Register Here</Button></a>
                        </Card>
                    </Col>
                ))
            }
        </Row>
      </Container>
    </section>
  )
}

export default Events
