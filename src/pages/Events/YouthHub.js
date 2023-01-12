import React from 'react';
import { Container,Row,Col,Button } from 'react-bootstrap';
import FD from '../../img/youth.jpg';
import Empower from '../../img/empower-youth.png';
import Site from '../../img/site-map.png';
import {FaRegEdit} from 'react-icons/fa';

const Youthhub = () => {
  return (
    <section id="event__section" className='page'>
      <Container>
        <Row className='mb-4'>
            <div className='title flex-title'>
                <h2>INTERNATIONAL YOUTH HUB</h2>
                <a href="../pdf/youthhub.pdf" target="_blank"><Button>Brochure</Button></a>
            </div>
           <Col md={6} lg={6}>
                <div className='intro__section'>
                    <h4>INTRODUCTION</h4>
                    <p>Youth in a country is the most viable and potential human resource not only in population structure but also in social structure. They should be given the appropriate space and opportunity to exercise their talents and knowledge for the movement of society in a positive progress and an urban public space that have every possible facility for the growth of the urban youth in every sector of life starting from art and creativity, sports and athletics, technology and entertainment to loving the Mother Nature.</p>
                    <p>The design encourages students to do an extensive study of what today's young people need and to understand their demands from the present-day society. Addressing this concern and providing a suitable solution will nurture them to grow into the promising adults of tomorrow. The need to establish a space exclusive for them is significant as they are the most vulnerable and susceptible, to the worlds every treacherous event and hence are in need of a place to outlet their ideas, experiment and develop, with a positive and competitive mind. The design is developed as an urban space, dedicated to young people devoting time and energy, to culture and shape them.</p>
                </div>
           </Col>
           <Col md={6} lg={6}>
             <div className="event__img mb-3">
               <img src={FD} alt=""/>
             </div>
           </Col>
           <p>The International youth hub is going to be the ultimate center for the students of the world therefore, the facilities and activities provided should be for both the local and foreign youths from all over the world. Hence, keeping this idea at hand the following program has been deduced.</p>
        </Row>
        <Row className='mb-4'>
            <Col md={12} lg={12}>
              <div className='aim__section'>
                <h4>AIM AND OBJECTIVE OF THE PROJECT</h4>
                 <p>The sole purpose of this project is to be a breathing and breeding arena of urban youths who can channelize their extremely eager passion and energy on the variety of fruitful activities that this place is going to offer them. This place would be an amalgamation of fun and productive events for the urban youth to enjoy their time and nourish their growing mind. It should be the place where they will learn to respect the Mother Nature and the beauty of the environment; they will grasp the ever-entertaining essence of creativity and art, and grab and feel the raging adrenaline rush of various sports and athletics with a positive competitive mind.</p>
                 <p>The project also determines to help build a healthy relationship among the various groups in the society. This space can be the ultimate zone for all the youths of the city where they will come and feel relaxed. Youths from all over the place will come under the same roof for a cause or reason or for pure entertainment. This place can be a zone for progressive protests and rebels by the youths. As we have seen in the past years, a number of issues rose up at different time and were solved purposefully, all because of the initiative of the younger population of our country. The sole purpose of the project is to become the ultimate area for the urban youths from all over the earth to come around and interact, share their ideas and views, how they can learn about one another and the way they want to invest their energy in whatever things they like doing. The space should be designed in a way that will attract the urban youths automatically rather than forcing them to do something. The activities and events included in the center for their relaxation and mind empowerment should be magnetic and catchy enough to make them come at that place by themselves.</p>
              </div>
            </Col>
        </Row>
        <Row className='mb-4'>
            <div className="brief__section">
                <h4>PROGRAMS IN THE YOUTH CENTRE:</h4>
                <h6>TRAINING FOR LOCAL YOUTHS:</h6>
                <p>Training the youths on different fields to make them self-sufficient and help them earn a living e.g., training them on fishing, poultry framing, handicrafts etc.</p>
                <h6>RESEARCH AND DEVELOPMENT WORK:</h6>
                <p>Research carried out by the youths on different youth related issues and how they can be addressed. These works can be published or made into documentary films for encouraging the youths who were involved in the research work.</p>
                <h6>SEMINAR/ WORKSHOP/YOUTH CONFERENCE:</h6>
                <p>Seminar on different youth related issues, international conferences and workshops on different subjects creating a space for exchange of views and visions for youths from all over the world and our country. Also, it will help our youths learn about new technologies and ideas shared by the individuals from other countries at the meetings.</p>
                <h6>SPORT AND CULTURAL PROGRAM:</h6>
                <p>Competitive sports and cultural programs to build up a sense of healthy competition is important. Youths from all over the world can display their culture to one another and this will also give a floor to our culture to be explored by the international youths.</p>
                <h6>EXCHANGE OF KNOWLEDGE AND IDEAS THROUGH REGULAR INTERACTION:</h6>
                <p>Living together under the same roof, our local Bangladeshi youths and the international youths from different countries will get the chance to interact in a more intimate level giving them the opportunity to know about each other’s culture, history, heritage and lifestyle. They can gather around and talk about different topics and have fun along the way making the exchange of ideas and views at a more friendly level.</p>
                <h6>ENGAGING THEMSELVES IN DIFFERENT ENTERTAINMENT FACILITIES TOGETHER:</h6>
                <p>Getting together at a variety of indoor or outdoor sports or sitting together to watch a movie is also an important part for letting the youths to know each other.</p>
                <h6>ENGAGING IN DIFFERENT SOCIAL WORKS TOGETHER:</h6>
                <p>Youths of different countries can participate together in activities like teaching the deprived children of our society or take initiatives together to give the less fortunate ones a better living condition through numerous ways. In this way the idea of teamwork and leadership qualities will be introduced for the youths. According to the programs introduced in the center the following functions are proposed:</p>
                <p><strong>FUNCTIONAL REQUIREMENTS:</strong></p>
                <p>General facilities:</p>
                <ul>
                    <li>Lobby and reception area</li>
                    <li>Administration block:
                        <ul>
                            <li>a. General office</li>
                            <li>b. Office for the in charge of the institution</li>
                            <li>c. small conference room for the use of office staff meetings</li>
                        </ul>
                    </li>
                    <li>Library with modern amenities e.g., digital media for research</li>
                    <li>Multipurpose hall room for seminars and workshops</li>
                    <li>Auditorium for cultural functions or large conferences</li>
                    <li>Media center</li>
                    <li>Youth hostel or dormitory for youths from all over the world</li>
                    <li>Gym</li>
                </ul>
                <h6>ENTERTAINMENT FACILITIES:</h6>
                <ul>
                    <li>Indoor play area</li>
                    <li>coffee area</li>
                    <li>Open public space and plaza</li>
                </ul>
                <h6>EDUCATIONAL FACILITIES:</h6>
                <ul>
                    <li>Classroom types:
                        <ul>
                            <li>a. Vocational training rooms for the local youths</li>
                            <li>b. Art and sculpture studio</li>
                            <li>c. Music and dance learning rooms</li>
                            <li>d. General classrooms</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </Row>
        <Row className='mb-4'>
            <div className='guideline__section'>
                <h4>CONCEPT</h4>
                <p>The main idea of this project is to develop a space for the youths where they will understand their true potentials and utilize them in a useful way. Every youth has their individual talents and creativity. The only need is to recognize them and convert them into a more important and fruitful idea. The youths of our country are deprived from the modern amenities hence most of them do not know about their true talents. In this center the experts will guide he youths in their right paths and help them discover about themselves. Hence the concept has been developed:</p>
                <h6>EMPOWER YOUTHS:</h6>
                <p>Introducing educational and training facilities for the youths who are deprived from these facilities and the ones who are suffering from unemployment.</p>
                <h6>INSPIRE YOUTHS:</h6>
                <p>Understand their true potential through skills in art, sports, music, theatre for development of healthy mind and soul for our culture and heritage.</p>
                <h6>SUPPORT YOUTHS:</h6>
                <p>Strengthen their potentials through education and entertainment at the same time. </p>
                <div style={{textAlign: 'center'}}>
                  <img src={Empower} alt=""/>
                </div>
            </div>
        </Row>
        <Row className='mb-4'>
            <div className="rules__section">
               <h4>Site:</h4>
               <div style={{textAlign: 'center'}}>
                <img src={Site} alt="" style={{width: '100%', maxWidth: '650px'}}/>
               </div>
            </div>
        </Row> 
          
        <Row>
        <div className='title'>
            <h4>BRIEF RELEASE DATES</h4>
            <div className='specai-text'>
            <h5>Release of Brief:18th Jan 2023, Wednesday​</h5>
            </div>
        </div>
        <Col md={4} lg={4}>
            <div className="date_relese">
                <FaRegEdit/>
                <h4>Early Bird Registrations​</h4>
                <p><strong>15th January to 1st February 2023</strong></p>
                <p><strong>FOR STUDENTS - </strong>(PER TEAM)</p>
                <p><strong>INDIAN - </strong>INR 1500</p>
                <p><strong>INTERNATIONAL - </strong>USD 18</p>
            </div>
        </Col>
        <Col md={4} lg={4}>
            <div className="date_relese">
                <FaRegEdit/>
                <h4>Late Registrations​</h4>
                <p><strong>15th February to 20th February 2023</strong></p>
                <p><strong>FOR STUDENTS - </strong>(PER TEAM)</p>
                <p><strong>INDIAN - </strong>INR 2500</p>
                <p><strong>INTERNATIONAL - </strong>USD </p>
            </div>
        </Col>
        <Col md={4} lg={4}>
            <div className="date_relese">
                <FaRegEdit/>
                <h4>Standard Registrations​</h4>
                <p><strong>2nd February to 10th February 2023</strong></p>
                <p><strong>FOR STUDENTS - </strong>(PER TEAM)</p>
                <p><strong>INDIAN - </strong>INR 2000</p>
                <p><strong>INTERNATIONAL - </strong>USD 24</p>
            </div>
        </Col>
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

export default Youthhub
