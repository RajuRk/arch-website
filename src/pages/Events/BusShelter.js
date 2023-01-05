import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import BusImg from '../../img/shelters-big.jpg';
import SiteImg from '../../img/site-photo.png';

const BusShelter = () => {
  return (
    <section id="event__section" className='page'>
      <Container>
        <Row className='mb-4'>
            <div className='title'>
                <h2>SMART BUS SHELTER</h2>
            </div>
           <Col md={6} lg={6}>
                <div className='intro__section'>
                    <h4>INTRODUCTION</h4>
                    <p>Bus stops prevent passengers from trying to board or alight in hazardous situations such as at intersections or where a bus is turning and is not using the curb lane. Public Transport has been a very crucial part of enabling cities for a very long time. They are an inseparable element to any urban environment bringing the ability to scale cities while sustaining the quality of spanning it. There are several urban infrastructures planted across the city that helps a better use of this system more like a dock.</p>

                    <p>A dock where the complex human population meets this huge network of mass transit means. The approach to developing them is mostly top-down, because of many reasons - attributed to speed scaling and deployment. And it is true, every bus stop looks the same from a development plan perspective - a dot on a huge urban map. But conversely, every bus stand installed is an opportunity to solve a need of a locality if we see it bottom-up.</p>
                </div>
           </Col>
           <Col md={6} lg={6}>
             <div className="event__img">
               <img src={BusImg} alt=""/>
             </div>
           </Col>
        </Row>
        <Row className='mb-4'>
            <Col md={6} lg={6}>
              <div className='aim__section'>
                <h4>AIM</h4>
                <ul>
                    <li>On the ground Bus stands now serve a much larger demographic, especially in  developing countries. And it is a lifeline for the middle class and migrant population.</li>
                    <li>It's a system that is very old and has changed a lot from what it was in the past, but it still requires a lot of work especially we see it in comparison to private automobile companies who are ahead by leaps and miles ahead which serves only people who can afford them.</li>
                    <li>While mobility technology is not the purview of architects, a significant part of the experience happens at these docks.</li>
                    <li>If a bus stand in every locality is differently used, can this new update for public transit recognize this changing need?</li>
                    <li>Can there be a new system of a bus stop design that can accommodate this type of usage that adapts from locality to locality?</li>
                </ul>
              </div>
            </Col>
            <Col md={6} lg={6}>
                <div className="objective__section">
                   <h4>OBJECTIVES</h4>
                   <p>Problem Identification: There are many problems that exist in urban areas, but the choice of a relevant and important problem is a must. </p>
                   <p><strong style={{fontWeight: "bold"}}>Security/Vandalism Proofing: </strong>How will the design resist theft and mishandling, by becoming a robust entity despite modularity.</p>
                   <p><strong style={{fontWeight: "bold"}}>Identity: </strong>How does the bus stand reflect the space it has been placed in or the city it belongs to?</p>
                </div>
            </Col>
        </Row>
        <Row className='mb-4'>
            <div className="brief__section">
                <h4>BRIEF</h4>
                <p>The problem looks at the idea that each bus stand when looked at in isolation has a different urban condition they belong in, the number of people that use them, and who create a new pattern.</p>
                <p>The challenge is to design a modular bus stand system that can change from locality to locality, that solves one Neighbourhood of your choice as a pilot of this system. The deliverable for this competition demands a single bus stand only.</p>
                <p>The design has to be more like a system of parts, that has permutations and combinations that can adapt to the varying needs of the urban intersections that they are placed in.</p>
                <h4>SITE</h4>
                <ul>
                    <li>Currently, there is already a bus service in place but no structure for a bus stop</li>
                    <li>Every day hundreds of students wait at the junction without the structure</li>
                    <li>So that's why the proposal for a Smart bus shelter.</li>
                </ul>
                <div className='brif-img'>
                  <img src={SiteImg} alt="" />
                </div>
            </div>
        </Row>
        <Row className='mb-4'>
            <div className='guideline__section'>
                <h4>GUIDELINES</h4>
                <ul>
                    <li>You have to deliver an architectural outcome on the following site, based on the given outlines.</li>
                    <li>Recommended number of sheets/presentation images/boards: 3 (Three) of size [ 420mm x 594mm ]  [ A2 ]in portrait/landscape  format  (JPEG only).</li>
                    <li>Minimum 3 (Three) & No maximum sheet limit. Each image should be less than 15MB. (Do not submit PNG format)</li>
                    <li>Minimum requisite submissions are sheets/boards + Cover image containing:
                        <ul>
                            <li>Site plan (Compulsory)</li>
                            <li>Conceptual x 1 (Minimum)</li>
                            <li>Section & elevation  x 2 (Minimum)</li>
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
                 <li>The competition is open for students from all the disciplines of design</li>
                 <li>The team limit for this competition is 2 members maximum per team</li>
                 <li>This is design ideas challenge only</li>
                 <li>There is no built commission/realization associated with the problem</li>
                 <li>Ensure that the final sheets submitted  include your name</li>
               </ul>
            </div>
        </Row>
        <Row className='mb-4'>
            <div className='judging__section'>
                <h4>JUDGING CRITERIA & JUDGES</h4>
                <p>The entries will be judged by an  jury of the competition on the  following criteria:</p>
                <ul>
                    <li>Presentation: The fundamental to a good entry is a visual delivery of ideas</li>
                    <li>Concept/Idea: Quality of thought and intent in the pre-design phase</li>
                    <li>Spaces/Programme: How the spaces are calculated and ordered </li>
                    <li>Design Outcome: The final architectural outcome of the solution</li>
                </ul>
                <p>The judging panel can also add other criteria based on their internal discussions - which will be in line with the problem statement. Participants are advised to fulfil above given criteria first in their design. Names of the jury panel will be announced soon.</p>
            </div>
        </Row>
        <Row className='mb-4'>
            <div className='submit__section'>
                <h4>HOW TO SUBMIT</h4>
                <ul>
                    <li>Read all the competition rules and details from above the sheets</li>
                    <li>No entry fee for your registration</li>
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

export default BusShelter