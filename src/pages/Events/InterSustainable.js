import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload } from "react-icons/fa";
import FD from '../../img/sus.jpg';
import SiteDiagram from '../../img/site-diagram.png';
import viewLand from '../../img/view-land.png';

const SustainableHouse = () => {
  return (
    <section id="event__section" className='page'>
    <Container>
      <Row className='mb-4'>
          <div className='title flex-title'>
              <h2>SUSTAINABLE HOUSE</h2>
              <a href="../pdf/inter-sustainable.pdf" target="_blank"><Button><FaDownload/> Download Design Brief</Button></a>
          </div>
         <Col md={12} lg={12}>
              <div className='intro__section'>
                  <h4>OBJECTIVES</h4>
                  <p>Design an sustainable house in POOJA'S ICONIC CITY 8cents @Rathinam tech zone campus, Eachnari.</p>
                  <p>Sustainable houses are those that, being respectful of the environment, take advantage of all available resources to reduce energy consumption and, therefore, help save on household bills, something that is always appreciated.</p>
              </div>
         </Col>
         <Col md={12} lg={12}>
           <div className="event__img mb-4">
             <img src={FD} alt=""/>
           </div>
         </Col>
      </Row>
      <Row className='mb-4'>
          <div className="brief__section">
              <h4>BRIEF OF THE COMPETITION</h4>
              <p><strong>Awareness: </strong>Understanding and researching in-depth into the issue that is caused due to the need for expansion.</p>
              <p><strong>Contex conscious: </strong>Study the vernacular and sustainable construction methods and building materials that can be used to create the symbiosis that exists without harming.</p>
              <p><strong>Climate responsive: </strong>Study the climate of the context with respect to its extreme and normal weather conditions. As the rainforest offers an extreme context through various aspects.</p>
              <p><strong>Compact: </strong>Understand the scale required to be built and the scope and limitations the context offers.</p>
              <p>The above objectives can be a point of beginning to conceive this design. Participants can assume their contexts and user group on the basis of their concepts and designs.</p>
              <h4>SITE</h4> 
              <div className="mb-3" style={{textAlign: "center"}}>
                <img src={SiteDiagram} alt="" style={{width: '100%', maxWidth: '600px'}}/>
              </div>
              <div className="mb-3" style={{textAlign: "center"}}>
                <img src={viewLand} alt="" style={{width: '100%', maxWidth: '600px'}} className="mb-3"/>
              </div>
          </div>
          <div className=''>
            <p><strong>Site Area:</strong> 3484 sqft (8cents)</p>
            <p><strong>Height limit:</strong> G+2</p>
            <p><strong>FSI (Floor Space Index):</strong> 1.5</p>
            <p><strong>Maximum plot coverage:</strong> 60%</p>
            <p><strong>Space ideas:</strong></p>
            <ul>
              <li>Living room</li>
              <li>Kitchen &Dinning</li>
              <li>Bedrooms</li>
              <li>Washrooms and Toilets</li>
              <li>Balcony</li>
              <li>passage</li>
            </ul>
            <p>These are basic ancillary spaces required for a family. The location and design-specific spaces can be added to the design according to the participant's choice.</p>
          </div>
      </Row>
    </Container>
  </section>
  )
}

export default SustainableHouse