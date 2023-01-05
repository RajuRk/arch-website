import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import PavilionImg from '../../img/pavilion-big.jpg';

const Pavilion = () => {
  return (
    <section id="event__section" className='page'>
      <Container>
        <Row className='mb-4'>
            <div className='title'>
                <h2>PAVILION</h2>
            </div>
           <Col md={6} lg={6}>
                <div className='intro__section'>
                    <h4>INTRODUCTION</h4>
                    <p>The competition is to design a pavilion - a community space, that can be shared equally by one and all in the transforming urban settings. It could be a new refuge, an inspiring and calming breather!</p>
                    <p>The pavilion can be a place catering to various urban activities; where it can become a place to relax and to wander in, a small community space for to gather, discuss and even loiter. to be built using sustainable building material like bamboo.</p>
                    <p>Another objective of this design challenge is to raise the awareness of bamboo as a sustainable building material. Pa1iicipants have to leverage bamboo as the primary material in reconfiguring the pub I ic space, by creating a communion with the site and its surroundings.</p>
                    <p>However, the proposed design would inspire the future generations of the community to make architecture of bamboo as a reoccurring phenomenon of ecological conception.</p>
                </div>
           </Col>
           <Col md={6} lg={6}>
             <div className="event__img">
               <img src={PavilionImg} alt=""/>
             </div>
           </Col>
        </Row>
        <Row className='mb-4'>
            <Col md={6} lg={6}>
              <div className='aim__section'>
                <h4>AIM</h4>
                <ul>
                    <li>Aim of the pavilion is to make socially inclusive space evocative of new or transformed urban character; hence the daily, weekly and periodic activities or uses in response to the context of the site. The design-justification lies in the possible success of the programme</li>
                    <li>The competition aims to design a striking and thought-provoking pavilion to start a nation­wide dialogue on the urgency to explore sustainable building materials</li>
                    <li><strong>NOTE:</strong> This is an open ideas competition and purely focuses on the creative and exploratory use of materials for the pavilion. Participants are not expected to go into the technical details of construction or manufacture </li>
                </ul>
              </div>
            </Col>
            <Col md={6} lg={6}>
                <div className="objective__section">
                   <h4>OBJECTIVES</h4>
                   <ul>
                    <li>The architecture of the pavilion should itself be an exploration into a sustainable material and represent the theme of the brief creatively.</li>
                    <li>The design of the pavilion seeks to be expressive, exciting, and powerful to make people think about the existing and future realities of cities.</li>
                   </ul>
                </div>
            </Col>
        </Row>
        <Row className='mb-4'>
            <div className="brief__section">
                <h4>BRIEF</h4>
                <p>A PaviIion might be used as a: shelter, seating, meeting point, cafe, theatre, or for lectures, events, exhibitions, sports, play, relaxation, work and much much more</p>
                <p>Pavilions are flexible, open architectural structures, usually erected in parks and gardens. And they played a significant role in the political and cultural propaganda through international exhibitions in the 19th century, as well as in the presentations of new technologies and materials</p>
                <p>A building in a park or garden that usually has open sides and is used for parties, concerts, or other events</p>
            </div>
            <div className="site_section">
                <h4>SITE</h4>
                <ul>
                    <li>The max buildable area - 25 sq.m (including the overhangs and projections) The height of the pavilion should not exceed 4 meters.</li>
                    <li>The structure must be freestanding and cannot be an extension of any existing building. built.</li>
                    <li>The long-term durability of the structural members is expected and they must be easily replaceable.</li>
                    <li>Appropriate lighting to be considered for its night time use.</li>
                </ul>
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
                            <li>Section & Elevation</li>
                            <li>Walkthrough Minimum 2 Minutes</li>
                            <li>3D Views, perspective and any other means may be used to explain the design proposal</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </Row>
        <Row className='mb-4'>
            <div className="rules__section">
               <h4>RULES</h4>
               <ul>
                 <li>The competition is open for students from all the disciplines of design. The team limit for this competition is 3 members maximum per team. This is design ideas challenge only.</li>
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

export default Pavilion
