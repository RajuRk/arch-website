import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import PavilionImg from '../../img/pavilion-big.jpg';
import BluePrint from '../../img/blue-print.png';
import MapView from '../../img/long-map-view.png';

const SpaceDevelopment = () => {
  return (
    <section id="event__section" className='page'>
      <Container>
        <Row className='mb-4'>
            <div className='title'>
                <h2>URBAN SPACE REDEVELOPMENT</h2>
            </div>
           <Col md={12} lg={12}>
                <div className='intro__section'>
                    <h4>INTRODUCTION</h4>
                    <p>Regeneration is the process of renewal, restoration. In architecture – is the practice of engaging the natural world as the medium for & generator of the architecture.</p>
                    <p>Regeneration Architecture -has two focuses. It is an architecture that focuses on conservation & performance through a focused reduction on the environmental impacts of a building.</p>
                </div>
           </Col>
           <Col md={12} lg={12}>
             <div className="event__img">
               <img src={PavilionImg} alt=""/>
             </div>
           </Col>
        </Row>
        <Row className='mb-4'>
            <Col md={6} lg={6}>
              <div className='aim__section'>
                <h4>AIM</h4>
                <p>The proposed project would respond to a number of needs as follows:</p>
                <ul>
                    <li>The primary need to turn a prominent and declining segment of canal into a public asset. The project area, with its beautiful views, large land and pier areas, and miles of water's edge should no longer remain moribund and isolated from the vibrant communities that surround it.</li>
                    <li>The need to make the waterfront available for public access and use. The proposed project acknowledges that the extraordinary features of this segment of waterfront would be best preserved for the broadest public use.</li>
                    <li>The need to provide more publicly accessible open space in Echanari.</li>
                </ul>
              </div>
            </Col>
            <Col md={6} lg={6}>
                <div className="objective__section">
                   <h4>OBJECTIVES</h4>
                   <ul>
                    <li>Promoting pedestrian scaled environments</li>
                    <li>Proposing built form that is sensitive in scale with the surrounding community</li>
                    <li>Connecting to the existing public realm Strengthen the urban development pattern</li>
                    <li>Site and mass the buildings to strengthen the streetscape</li>
                    <li>Orient building entrances to the street</li>
                    <li>Promote a variety of façade articulation and detail</li>
                    <li>Encourage intensification</li>
                    <li>Contribute to walk able environments</li>
                    <li>Provide a high quality architectural design </li>
                    <li>Situate living areas close to the street </li>
                    <li>Incorporate lighting, signage and surface paving to contribute to the streetscape and pedestrian comfort</li>
                   </ul>
                </div>
            </Col>
        </Row>
        <Row className='mb-4'>
            <div className="brief__section">
                <h4>BRIEF</h4>
                <p>The eminent site design challenge was to transform this degraded landscape around the canal into a safe & pleasant public space. Create a green expo, accommodate for a large influx of visitors during the exposition from May to October, and demonstrate green technologies. To transform a unique space to make the expo an unforgettable event, transition into a permanent public waterfront park after the expo.</p>
            </div>
            <div className="site_section">
                <h4>SITE</h4>
                <p>The canal is located exactly near Arulmigu Vinayagar temple at Echanari. Adjacent roads are NH 83 and NH544 (COIMBATORE BYPASS).You are expected to do a urban study around the canal and rectify the issues and potentials and give a suitable proposal for that.</p>
                <h6>NEIGHBOURING LAND USES</h6>
                <p>Surrounding Context Throughout the neighbourhood, townhouse, semidetached and detached dwellings built form exist, overlaid with home occupation, live/work, commercial and bed and breakfast uses.</p>
                <h6>TOPOGRAPHY</h6>
                <p>As an existing lot in an established neighbourhood, the site is a rural street edge consisting of open storm drainage ditches, culverts under driveways and no public sidewalks.</p>
                <h6>STREET NETWORK</h6>
                <p>As an established block in the Town fabric, the site is part of the road and transportation network. The surrounding streets are neighbourhood in scale and traffic volume.</p>
                <h6>APPLICABLE TOWN POLICIES</h6>
                <div style={{textAlign: "center"}}>
                    <img src={BluePrint} alt="" style={{width:"100%", maxWidth:"600px"}}/>
                </div>
                <div style={{textAlign: "center"}}>
                    <img src={MapView} alt="" style={{width:"100%", maxWidth:"600px"}}/>
                </div>
            </div>
        </Row>
        <Row className='mb-4'>
            <div className='guideline__section'>
                <h4>GUIDELINES</h4>
                <ul>
                    <li>You have to deliver an architectural outcome on the following site, based on the given outlines.</li>
                    <li>Recommended number of sheets/presentation images/boards: 3 (Three) of size </li>
                    <li>[ 420mm x 594mm] [ A2]in portrait/landscape format (JPEG only)</li>
                    <li>Minimum 3 (Three) & No maximum sheet limit. Each image should be less than 15MB.</li>
                    <p><strong>(Do not submit PNG format)</strong></p>
                    <li>Minimum requisite submissions are sheets/boards + Cover image containing:
                        <ul>
                            <li>Site plan</li>
                            <li>Conceptual x 1 (Minimum)</li>
                            <li>section &elevation  x 2 (Minimum)</li>
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
                 <li>The competition is open for students from all the disciplines of design.</li>
                 <li>The team limit for this competition is 2 members maximum per team.</li>
                 <li>This is design ideas challenge only. </li>
                 <li>There is no built commission/realization associated with the problem.</li>
                 <li>Ensure that the final sheets submitted include your name.</li>
               </ul>
            </div>
        </Row>
        <Row className='mb-4'>
            <div className='judging__section'>
                <h4>JUDGING CRITERIA & JUDGES</h4>
                <ul>
                    <li>The entries will be judged by an jury of the competition on the following criteria:
                        <ul>
                            <li>Presentation: The fundamental to a good entry is a visual delivery of ideas</li>
                            <li>Concept/Idea: Quality of thought and intent in the pre-design phase</li>
                            <li>Spaces/Programme: How the spaces are calculated and ordered</li>
                            <li>Design Outcome: The final architectural outcome of the solution</li>
                        </ul>
                    </li>
                    <li>The judging panel can also add other criteria based on their internal discussions - which will be in line with the problem statement. Participants are advised to fulfil above given criteria first in their design. Names of the jury panel will be announced soon</li>
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

export default SpaceDevelopment
