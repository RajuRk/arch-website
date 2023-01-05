import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import FDImg from '../img/fd-big.jpg';
import HouseImg from '../img/house-big.jpg';
import PavilinImg from '../img/pavilion-big.jpg';
import PhotoImg from '../img/photo-big.jpg';
import BusImg from '../img/shelters-big.jpg';

const datas = [
    {
        id: 1,
        title: "FACADE DESIGN",
        img: FDImg,
        link: "/event/facade-design"
    },
    {
        id: 2,
        title: "PAVILION",
        img: PavilinImg,
        link: "/event/pavilion"
    },
    {
        id: 3,
        title: "SUSTAINABLE HOUSE",
        img: HouseImg,
        link: "/event/sustainable-housing"
    },
    {
        id: 4,
        title: "ARCHITECTURAL PHOTOGRAPHY",
        img: PhotoImg,
        link: "/event/architecture-photography"
    },
    {
        id: 5,
        title: "BUS SHELTERS",
        img: BusImg,
        link: "/event/bus-shelter"
    },
]

const Events = () => {
  return (
    <section id="events">
      <Container>
        <Row className='mt-4 mb-4'>
            <div className='title'>
                <h2>Events</h2>
            </div>
            {
                datas.map((data) => (
                    <Col md={4} lg={4} key={data.id} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={data.img} />
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Link>
                                    <Link to={data.link}>Know More</Link>
                                </Card.Link>
                            </Card.Body>
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