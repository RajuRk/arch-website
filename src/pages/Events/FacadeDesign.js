import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import FD from '../../img/fd-big.jpg';

const FacadeDesign = () => {
  return (
    <section id="event__section" className='page'>
      <Container>
        <Row className='mb-4'>
            <div className='title'>
                <h2>FACADE DESIGN</h2>
            </div>
           <Col md={6} lg={6}>
                <div className='intro__section'>
                    <h4>INTRODUCTION</h4>
                    <p>This competition is based on the philosophy that the 21st century facade needs to be adaptive and responsive to human needs, and climatic conditions along with minimizing energy consumption during operation phase especially in the workplace. With researchers probing beyond workplace aesthetics to examine holistic factors, we are learning that air and water quality, thermal control, and especially visual access to outdoor environments can directly improve occupant wellbeing. </p>
                    <p>The facades of the building visible from street play an important role in contributing to the amenity and attractiveness of an area.</p>
                    <p>Facades should therefore be designed to have a pleasing scale and appearance, proportion and rhythm, solid-to-void relationship and materiality.</p>
                    <p>Care and attention should be given to their design to ensure the building stands up to critical observation from near and afar. It is essential that all building elevations are considered and designed as an integral part of the overall development.</p>
                </div>
           </Col>
           <Col md={6} lg={6}>
             <div className="event__img">
               <img src={FD} alt=""/>
             </div>
           </Col>
        </Row>
        <Row className='mb-4'>
            <Col md={6} lg={6}>
              <div className='aim__section'>
                <h4>AIM</h4>
                <ul>
                    <li>The exterior of the building makes a positive contribution to the public realm.</li>
                    <li>Facades are well considered and designed as an integral part of the building.</li>
                    <li>Conceptualize a faced system for a stilt+4 Storied office building</li>
                </ul>
              </div>
            </Col>
            <Col md={6} lg={6}>
                <div className="objective__section">
                   <h4>OBJECTIVES</h4>
                   <p>Whether blending in or standing out, embodying transparency or solidity, expressing coarseness or softness, a fayade is the medium through which we engage with architecture. It tells a story and can often set the tone for the rest of the interior. </p>
                </div>
            </Col>
        </Row>
        <Row className='mb-4'>
            <div className="brief__section">
                <h4>BRIEF</h4>
                <p>Blending in with its urban context or standing out to draw attention, a facade tells a building's story. It is an expressive medium through which we engage with architecture, defining first impressions and setting the tone for the interior by experimenting with transparency, movement, texture and color, among other aesthetic possibilities. Of course, the envelope also plays a crucial functional role, acting as a protective barrier against extreme weather conditions and directly impacting light transmittance, energy efficiency and acoustic comfort. Architects therefore face an important challenge: to achieve a balance between an attractive look and performance. To do so, it is pivotal to specify the right materials during the design stage.</p>
                <p><strong>SITE: </strong>Rathinam lT Park Coimbatore</p>
            </div>
        </Row>
        <Row className='mb-4'>
            <div className='guideline__section'>
                <h4>GUIDELINES</h4>
                <ul>
                    <li>You have to deliver an architectural outcome on the following site, based on the given outlines. Recommended number of sheets/presentation images/boards: 3 (Three) of size [ 420mm x 594mm ] [A2]in portrait/landscape format (JPEG only).</li>
                    <li>Minimum 3 (Three) & No maximum sheet limit. Each image should be less than 15MB. (Do not submit PNG format) </li>
                    <li>Minimum requisite submissions are sheets/boards+ Cover image containing:
                        <ul>
                            <li>conceptual x 1 (Minimum)</li>
                            <li>section & elevation x 2 (Minimum)</li>
                            <li>3D views x 4</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </Row>
        <Row className='mb-4'>
            <div className="rules__section">
               <h4>RULES</h4>
               <ul>
                 <li>The competition is open for students from al I the disciplines of design.</li>
                 <li>The team limit for this competition is 2members maximum per team.</li>
                 <li>This is design ideas challenge only.</li>
                 <li>There is no built commission/realization associated with the problem. Ensure that the final sheets submitted include your name.</li>
               </ul>
            </div>
        </Row>
        <Row className='mb-4'>
            <div className='judging__section'>
                <h4>JUDGING CRITERIA & JUDGES</h4>
                <ul>
                    <li>The entries will be judged by an jury of the competition on the following criteria:
                        <ul>
                            <li>Concept and design</li>
                            <li>Originality of design</li>
                        </ul>
                    </li>
                    <li>Aesthetics, functionality & durability </li>
                    <li>Innovative use of materials and construction techniques Practicality, feasibility and buildability of the pavilion</li>
                    <li>The judging panel can also add other criteria based on their internal discussions - which will be in line with the proble1n state1nent. </li>
                    <li>Participants are advised to fulfil above given criteria first in their design. N a1nes of the jury panel will be announced soon.</li>
                </ul>
            </div>
        </Row>
        <Row className='mb-4'>
            <div className='submit__section'>
                <h4>HOW TO SUBMIT</h4>
                <ul>
                    <li>Read all the competition rules and details from above the sheets.</li>
                    <li>No entry fee for your registration.</li>
                    <li>Submit your softcopy to this mail id (xxxxxxxxxxx)</li>
                </ul>
            </div>
        </Row>
        <Row className='mb-4'>
            <div className="dates__section">
               <h4>IMPORTANT DATES</h4>
               <p><strong>Release of Brief: </strong>02nd Feb 2023,Monday</p>
               <p><strong>Registration Deadline: </strong>15th Feb 2023,Wednesday</p>
               <p><strong>Queries Deadline: </strong>22nd Feb 2023,Wednesday</p>
               <p><strong>Submission Deadline: </strong>06th Mar 2023,Monday</p>
               <p><strong>Winner Announcement: </strong>15th Mar 2023,Wednesday</p>
            </div>
        </Row>
      </Container>
    </section>
  )
}

export default FacadeDesign
