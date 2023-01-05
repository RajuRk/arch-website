import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import ArchImg from '../../img/photo-big.jpg';

const Architecture = () => {
  return (
    <section id="event__section" className='page'>
      <Container>
        <Row className='mb-4'>
            <div className='title'>
                <h2>ARCHITECTURAL PHOTOGRAPHY</h2>
            </div>
           <Col md={6} lg={6}>
                <div className='intro__section'>
                    <h4>INTRODUCTION</h4>
                    <p>A photograph can tell any given number of stories depending on the individual seeing it. A photograph may not have a story at all but will be precious for a person just because they have a memory attached to it. Now when you try to bring this use of photograph into a field like Architecture – Architectural Photography – where art, design, and calculations are technically balanced, this must have a pre-defined role and definition to be present there.</p>
                    <p>Now this same strategy if used in Architecture photography, will bring a broader definition to the photo itself while enhancing its visual language to the common public to not look at it just as a photo but also as an art display. But again the word “Intersecting” is because many photographs must have been taken at the same structure or location, but is that going to be defining its language forever or the emotions too?</p>
                    <p>Architectural photography is exactly what it sounds like; the photography of architectural structures. Great architectural photography needs to make the most of a structure’s design and environmental setting. The best architectural photography is interesting, aesthetically appealing, skill full and accurate.</p>
                </div>
           </Col>
           <Col md={6} lg={6}>
             <div className="event__img">
               <img src={ArchImg} alt=""/>
             </div>
           </Col>
           <p>In simple terms, Architectural sketching just means drawing buildings, or elements of buildings, or landscapes with buildings in them. This could be on paper, computer or even via a light box. In reality, of course, there is quite a lot more to it than that! Architectural sketches are different from, say, artist’s sketches in that they include things like scales and keys for cross-referencing information; they often show their subjects from unusual angles (for example in a floor plan, which places the architect above a building, or in a section, which imagines a building cut in half); and when hand-drawn, they tend to be made on a particular size and type of paper.</p>
        </Row>
        <Row className='mb-4'>
            <Col md={6} lg={6}>
              <div className='aim__section'>
                <h4>AIM</h4>
                <p>Your challenge is simple: Submit one photograph that powerfully communicates an architectural form or space, capturing the essence of the place and the experience of those that inhabit it</p>
              </div>
            </Col>
            <Col md={6} lg={6}>
                <div className="objective__section">
                   <h4>OBJECTIVES</h4>
                   <p><strong style={{fontWeight: "bold"}}>Look for a unique angle :</strong> Playing with perspective is not only an entertaining thing to do, it can also be very rewarding. Taking time to find a different angle from which to photograph can expose an overlooked form or abstraction of a building’s detail that may give rise to another level of beauty and appreciation for its form.</p>
                   <p><strong style={{fontWeight: "bold"}}>Shoot in a variety of weather conditions and times of day : </strong>People often tend to seek the most dramatic lighting to shoot architectural wonders, such as sunset hours when shadows are long and colours bright. Although this often results in very atmospheric images, it only really encapsulates the building’s atmosphere at one specific point in time. Shooting a series of images during different times of the day, or even in various weather conditions, can help to paint a fuller story of the building’s relationship with its environment.</p>
                </div>
            </Col>
        </Row>
        <Row className='mb-4'>
            <div className="brief__section">
                <h4>BRIEF</h4>
                <p>Your image can be located anywhere in the world and be at any scale. It can be taken from a wide angle or close up, show a whole building or just a detail, and be located anywhere in the world. As long as your photo portrays part or all of a building or group of buildings, it is eligible. This should be accompanied by a short description of your photograph that explains what makes your image and the architecture shown within it is special.</p>
                <p>Special attention will be given to photographs depicting architecture that is intrinsically tied to our shared place and time. Images that encapsulate the atmosphere and emotion of a particular place, through the lens of architecture, are most likely to be rewarded.</p>
            </div>
        </Row>
        <Row className='mb-4'>
            <div className='guideline__section'>
                <h4>GUIDELINES</h4>
                <ul>
                    <li>You have to deliver an architectural outcome on the following topic, based on the given outlines</li>
                    <li>Recommended number of images: 1 (One) of size portrait/landscape format (JPEG only) for Look for a unique angle</li>
                    <li>Recommended number of  images: 3 to 5 of size portrait/landscape format (JPEG only) for Shoot in a variety of weather conditions and times of day</li>
                    <li>Submitted as 300dpi. A short description of the photograph, site and photographer. (Do not submit PNG format)</li>
                    <li>sketching should be submitted in A3 Size portrait/landscape format</li>                
                </ul>
            </div>
        </Row>
        <Row className='mb-4'>
            <div className="rules__section">
               <h4>RULES</h4>
               <ul>
                 <li>The competition is open for students from all the disciplines of design</li>
                 <li>This is design ideas challenge only</li>
                 <li>There is no built commission/realization associated with the problem</li>
                 <li>Ensure that the final sheets submitted include your name</li>
               </ul>
            </div>
        </Row>
        <Row className='mb-4'>
            <div className='judging__section'>
                <h4>JUDGING CRITERIA & JUDGES</h4>
                <p>The entries will be judged by an jury of the competition on the  following criteria: </p>
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

export default Architecture
