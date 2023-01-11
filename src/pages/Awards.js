import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Youthhub from '../img/youthhub.png';
import Photography from '../img/photography.png';
import UrbanSpace from '../img/urban-space.png';
import Sustainable from '../img/sustainable.png';
import EntranceDesign from '../img/entrance-design.png';
import PhotographySketch from '../img/photography_sketch.png';

const Awards = () => {
  return (
    <section id="awards" className='pt-4 pb-4'>
      <Container>
        <Row>
            <div className='title' style={{textAlign: "center",color: '#fff'}}>
              <h4>INTER COLLEGE COMPETITION</h4>
            </div>
            <div className='college-competition'>
              <div className='youtube-hub'>
                 <img src={Youthhub} alt=""/>
                 <h5>YOUTH HUB</h5>
                 <p>( 50,000/- + 2 Special Mention )</p>
              </div>
              <div className='youtube-hub'>
                 <img src={Photography} alt=""/>
                 <h5>PHOTOGRAPHY</h5>
                 <p>( 10,000/-)</p>
              </div>
            </div>
        </Row>
        <Row>
            <div className='title' style={{textAlign: "center", color: '#fff'}}>
              <h4>INTRA COLLEGE COMPETITION</h4>
            </div>
            <Col md={3} lg={3}>
                <div className='commpetitions'>
                  <img src={UrbanSpace} alt=""/>  
                  <h5>Urban Space Development</h5>
                  <p>( 10,000 + 5,000/- )</p>
                </div>
            </Col>
            <Col md={3} lg={3}>
                <div className='commpetitions'>
                  <img src={Sustainable} alt=""/>
                  <h5>Sustainable Resident</h5>
                  <p>( 10,000 + 5,000/- )</p>
                </div>
            </Col>
            <Col md={3} lg={3}>
                <div className='commpetitions'>
                  <img src={EntranceDesign} alt=""/>
                  <h5>Entrance Design</h5>
                  <p>( 10,000+5,000/-)</p>
                </div>
            </Col>
            <Col md={3} lg={3}>
                <div className='commpetitions'>
                  <img src={PhotographySketch} alt=""/>
                  <h5>Photography & Sketch</h5>
                  <p>( 10,000+5,000/-)</p>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Awards
