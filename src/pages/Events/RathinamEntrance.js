import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import BusImg from '../../img/shelters-big.jpg';
import PrintMap from '../../img/print-map.png';
import SitePhoto from '../../img/site-photo.png';
import Objective from '../../img/objective.png';

const Entrance = () => {
  return (
    <section id="event__section" className='page'>
      <Container>
        <Row className='mb-4'>
            <div className='title'>
                <h2>RATHINAM ENTRANCE</h2>
            </div>
           <Col md={6} lg={6}>
                <div className='intro__section'>
                    <h4>INTRODUCTION</h4>
                    <p>To create design guidelines for streets in Coimbatore which prioritize streets for people and not for vehicles, thereby reinstating the position of streets as dominant and most vibrant urban public realm.</p>

                    <p>To integrate functional requirements of all road users and stakeholders in the street design as per priority, suitability and need of each road user, ensuring that there is equitable allocation of available road space across all stakeholders. To design and develop streets for safety of all road users.</p>

                    <p>Bus stops prevent passengers from trying to board or alight in hazardous situations such as at intersections or where a bus is turning and is not using the curb lane.</p>

                    <p>Public Transport has been a very crucial part of enabling cities for a very long time.</p>
                </div>
           </Col>
           <Col md={6} lg={6}>
             <div className="event__img">
               <img src={BusImg} alt=""/>
             </div>
           </Col>
        </Row>
        <Row className='mb-4'>
            <Col md={12} lg={12}>
              <div className='aim__section'>
                <h4>AIM</h4>
                <p>Designing streets for people. Designing the streets for better mobility, safety and livability of the users. Establishing an image of the city by restructuring the streets which form the largest public realm of the city . Designing the streets to provide more and better mobility choices.</p>
                <p>On the ground Bus stands now serve a much larger demographic, especially in  developing countries. And it is a lifeline for the middle class and migrant population.</p>
                <p>It's a system that is very old and has changed a lot from what it was in the past, but it still requires a lot of work especially we see it in comparison to private automobile companies who are ahead by leaps and miles ahead which serves only people who can afford them.</p>
                <p>While mobility technology is not the purview of architects, a significant part of the experience happens at these docks.</p>
                <p>If a bus stand in every locality is differently used, can this new update for public transit recognize this changing need? </p>
                <p>Can there be a new system of a bus stop design that can accommodate this type of usage that adapts from locality to locality?</p>
              </div>
            </Col>
            <Col md={12} lg={12}>
                <div className="objective__section">
                   <h4>OBJECTIVES</h4>
                   <div style={{textAlign: 'center'}}>
                     <img className="mb-3" src={Objective} alt="" style={{width:'100%', maxWidth: '600px'}}/>
                   </div>
                   <p>Following are the important stages of the street designing process for achieving the desired results:</p>
                   <ul>
                     <li>Road inventory</li>
                     <li>Analysing activity survey information(Activity maping)</li>
                     <li>Analysing traffic behaviour</li>
                     <li>Setting up vision for the street</li>
                     <li>Selecting appropriate USDG template for designing the street</li>
                     <li>Right of way overlay</li>
                     <li>Junction design</li>
                     <li>Integration of existing elements</li>
                     <li>Stakeholder consultation at conceptual stage</li>                     
                   </ul>
                   <p><strong>Problem Identification:</strong> There are many problems that exist in urban areas, but the choice of a relevant and important problem is a must.</p>
                   <p><strong>Modularity:</strong> How modular is your design solution and can be implemented at various locations with similar or different problems.</p>
                   <p><strong>Security/Vandalism Proofing:</strong> How will the design resist theft and mishandling, by becoming a robust entity despite modularity.</p>
                   <p><strong>Identity:</strong> How does the bus stand reflect the space it has been placed in or the city it belongs to?</p>
                   <p><strong>General Design Principles: </strong> Trees,HighDesignStandards,Architectural Continuity,Redevelopment,Streetscape,Pedestrian,Traffic Areas,Access to Sunlight,Landscaping Building Positioning,Parking and Loading, Privacy,Outdoor Space and Recreational Facilities, NoiseAttenuation,WastManagement,Resource Conservation,Gateways.</p>
                </div>
            </Col>
        </Row>
        <Row className='mb-4'>
            <div className="brief__section">
                <h4>BRIEF</h4>
                <p>The Preliminary Development Concept responds to the urban design objectives of the “Main Street Commercial Corridor” designation.</p>
                <ul>
                    <li>Encourage the rehabilitation and renewal of Main Street Commercial Corridors and the enhancement of any distinctive functional or visual characteristics</li>
                    <li>Provide for and enhance the pedestrian nature of the Main Street Commercial Corridor</li>
                    <li>Enhance the street edge by providing for high quality façade design, accessible and walk able sidewalks, street furniture and proper lighting</li>
                    <li>Design development to support public transit</li>
                    <li>Create high quality public places</li>
                    <li>Maintain and create a strong organizing structure</li>
                    <li>Maintain or create a strong identity and place</li>
                    <li>Maintain the cultural heritage value or interest of listed buildings and ensure through the application of the Commercial Urban Design Guidelines that new development is consistent with the form of existing development</li>
                    <li>Encourage the transition and connection between the gateway Main Street Commercial Corridors and the Downtown through pedestrian, transit and design linkages</li>
                </ul>
            </div>
        </Row>
        <Row className='mb-4'>
            <div className='guideline__section'>
                <h4>SITE</h4>
                <p>The main criteria for the design of Entrance are that it should: Provide a welcoming and attractive entrance to the site; Prevent access by motorcycles, Allow safe access for pedestrians to or from Pollachi Road; Provide a suitable setting for future site interpretation boards; Currently, there is already a bus service in place but no structure for a bus stop Every day hundreds of students wait at the junction without the structure so we can have a smart bus shelter.</p>
                <p>So that's why the proposal for redesigning the urban public space.</p>
                <div style={{textAlign: "center"}}>
                    <img className="mb-3" src={PrintMap} alt="" style={{width: '100%', maxWidth: '600px'}}/>
                    <img className="mb-3" src={SitePhoto} alt="" style={{width: '100%', maxWidth: '600px'}}/>
                </div>
                <h4>GUIDELINES</h4>
                <p>You have to deliver an architectural outcome on the following site, based on the given outlines.</p>
                <p>Recommended number of sheets/presentation images/boards: 3 (Three) of size [ 420mm x 594mm ]  [ A2 ]in portrait/landscape  format  (JPEG only).</p>
                <p>Minimum 3 (Three) & No maximum sheet limit. Each image should be less than 15MB. (Do not submit PNG format)</p>
                <p>Minimum requisite submissions are sheets/boards + Cover image containing:</p>
                <ul>
                    <li>Site plan (Compulsory)</li>
                    <li>Conceptual x 1 (Minimum)</li>
                    <li>Section &elevation  x 2 (Minimum)</li>
                    <li>3D views x 4</li>
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
                    <li>Submit your softcopy to this mail id (submissionsrathinam@gmail.com)</li>
                </ul>
            </div>
        </Row>
        <Row className='mb-4'>
            <div className="dates__section">
               <h4>IMPORTANT DATES</h4>
               <p><strong>Release of Brief: </strong>18th Jan 2023, Wednesday</p>
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

export default Entrance