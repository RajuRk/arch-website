import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {FaRegEdit} from 'react-icons/fa';

const ReleseDate = () => {
  return (
    <section id="releseDate">
       <Container>
          <div className='title' style={{textAlign: 'center', color: '#fff'}}>
            <h2>BRIEF RELEASE DATES</h2>
            <div className='specai-text'>
               <h5>Release of Brief:20th Jan 2023, Friday</h5>
            </div>
          </div>
          <Row>
            <Col md={6} lg={6}>
                <div className="date_relese">
                   <FaRegEdit/>
                   <h4>Early Bird Registrations​</h4>
                   <p><strong>20th January to 18th February 2023</strong></p>
                   <p><strong>FOR STUDENTS - </strong>(PER TEAM)</p>
                   <p><strong>INDIAN - </strong>INR 1500</p>
                   <p><strong>INTERNATIONAL - </strong>USD 18</p>
                </div>
            </Col>
            <Col md={6} lg={6}>
                <div className="date_relese">
                   <FaRegEdit/>
                   <h4>Late Registrations​</h4>
                   <p><strong>18th February to 25nd February 2023</strong></p>
                   <p><strong>FOR STUDENTS - </strong>(PER TEAM)</p>
                   <p><strong>INDIAN - </strong>INR 2500</p>
                   <p><strong>INTERNATIONAL - </strong>USD 30</p>
                </div>
            </Col>
          </Row>
       </Container>
    </section>
  )
}

export default ReleseDate
