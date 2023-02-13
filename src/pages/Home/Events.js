import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Container,Row,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import FD from '../../img/youth.jpg';
import House from '../../img/sus.jpg';
import Pavilion from '../../img/urban.jpg';
import Photo from '../../img/photography_sketching.jpg';
import Shelters from '../../img/entrance-area.jpg';
import PhotoStandard from '../../img/photography-standard.jpg';

const datas = [
   {
     id: 1,
     img: FD,
     title: "INTERNATIONAL YOUTH HUB",
     link: "/event/youth-hub",
     dates: {
       relese: "Release of Brief",
       releseDate: "20th Jan 2023,Friday",
       registration: "Registration Deadline",
       registrationDate: "15th Feb 2023,Wednesday",
       queries: "Queries Deadline",
       queriesDate: "22nd Feb 2023,Wednesday",
       subission: "Submission Deadline",
       subissionDate: "12th Mar 2023,Sunday",
       winner: "Winner Announcement",
       winnerDate: "15th Mar 2023,Wednesday",
     },
   },
   {
    id: 2,
    img: House,
    title: "SUSTAINABLE HOUSE",
    link: "/event/sustainable-housing",
    dates: {
      relese: "Release of Brief",
      releseDate: "20th Jan 2023,Friday",
      registration: "Registration Deadline",
      registrationDate: "15th Feb 2023,Wednesday",
      queries: "Queries Deadline",
      queriesDate: "22nd Feb 2023,Wednesday",
      subission: "Submission Deadline",
      subissionDate: "12th Mar 2023,Sunday",
      winner: "Winner Announcement",
      winnerDate: "15th Mar 2023,Wednesday",
      },
    },
    {
      id: 3,
      img: Pavilion,
      title: "URBAN SPACE REDEVELOPMENT",
      link: "/event/urban-space-redevelopment",
      dates: {
        relese: "Release of Brief",
        releseDate: "20th Jan 2023,Friday",
        registration: "Registration Deadline",
        registrationDate: "15th Feb 2023,Wednesday",
        queries: "Queries Deadline",
        queriesDate: "22nd Feb 2023,Wednesday",
        subission: "Submission Deadline",
        subissionDate: "12th Mar 2023,Sunday",
        winner: "Winner Announcement",
        winnerDate: "15th Mar 2023,Wednesday",
      },
    },
    {
      id: 4,
      img: Photo,
      title: "PHOTOGRAPHY & SKETCHING",
      link: "/event/architecture-photography",
      dates: {
        relese: "Release of Brief",
        releseDate: "20th Jan 2023,Friday",
        registration: "Registration Deadline",
        registrationDate: "15th Feb 2023,Wednesday",
        queries: "Queries Deadline",
        queriesDate: "22nd Feb 2023,Wednesday",
        subission: "Submission Deadline",
        subissionDate: "12th Mar 2023,Sunday",
        winner: "Winner Announcement",
        winnerDate: "15th Mar 2023,Wednesday",
       },
    },
    {
      id: 5,
      img: Shelters,
      title: "ENTRANCE AREA",
      link: "/event/rathinam-entrance",
      dates: {
        relese: "Release of Brief",
        releseDate: "20th Jan 2023,Friday",
        registration: "Registration Deadline",
        registrationDate: "15th Feb 2023,Wednesday",
        queries: "Queries Deadline",
        queriesDate: "22nd Feb 2023,Wednesday",
        subission: "Submission Deadline",
        subissionDate: "12th Mar 2023,Sunday",
        winner: "Winner Announcement",
        winnerDate: "15th Mar 2023,Wednesday",
      },
    },
    {
      id: 6,
      img: PhotoStandard,
      title: "PHOTOGRAPHY",
      link: "/event/photography",
      dates: {
        relese: "Release of Brief",
        releseDate: "20th Jan 2023,Friday",
        registration: "Registration Deadline",
        registrationDate: "15th Feb 2023,Wednesday",
        queries: "Queries Deadline",
        queriesDate: "22nd Feb 2023,Wednesday",
        subission: "Submission Deadline",
        subissionDate: "12th Mar 2023,Sunday",
        winner: "Winner Announcement",
        winnerDate: "15th Mar 2023,Wednesday",
      },
    },
];

const Events = () => {
  
    var settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive:[
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


  return (
    <section id="competition">
        <Container fluid>
            <div className="title" style={{textAlign: "center"}}>
               <h2>EVENTS</h2>
            </div>
            <Row>
            <Slider {...settings} className="sliderWidth">
                {
                  datas.map((data) => (
                    <Col md={6} lg={6} key={data.id}>
                        <div className="card-sec">
                            <Row>
                                <Col md={6} lg={6}>
                                    <div className="comp-img mb-3">
                                        <Link to={data.link}><img src={data.img} alt=""/></Link>
                                    </div>
                                </Col>
                                <Col md={6} lg={6}>
                                    <div className="comp-content">
                                        <Link to={data.link}><h4>{data.title}</h4></Link>
                                        <p><strong>{data.dates.relese} :</strong> {data.dates.releseDate} </p>
                                        <p><strong>{data.dates.registration} :</strong> {data.dates.registrationDate} </p>
                                        <p><strong>{data.dates.queries} :</strong> {data.dates.queriesDate}</p>
                                        <p><strong>{data.dates.subission} :</strong> {data.dates.subissionDate}</p>
                                        <p><strong>{data.dates.winner} :</strong> {data.dates.winnerDate}</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                  ))  
                }
            </Slider>
            </Row>
        </Container>
    </section>
  )
}

export default Events
