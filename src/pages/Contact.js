import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="conatcPage">
      <Container className='mt-4 mb-4'>
        <Row>
          <Col md={8} lg={8}>
            <div className="contactForm">
              <div className="">
                <h4>CONTACT</h4>
              </div>  
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter Subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter Message"/>
                </Form.Group>
                <Button type='submit' className='btn-register'>Submit</Button>
              </Form>
            </div>
          </Col>
          <Col md={4} lg={4}>
            <div className='contactDetails'>
               <div className='coordinatore mb-4'>
                  <h4>STAFF</h4>
                  <p><i class="fa fa-phone" aria-hidden="true"></i> 82482 90509</p>
                  <p><i class="fa fa-phone" aria-hidden="true"></i> 99408 14141</p>
               </div>
               <div className='coordinatore mb-4'>
                  <h4>STUDENT COORDINATOR</h4>
                  <p><i class="fa fa-phone" aria-hidden="true"></i> 98091 29476</p>
                  <p><i class="fa fa-phone" aria-hidden="true"></i> 86067 31344</p>
               </div>
               <div className='coordinatore mb-4'>
                  <h4>EMAIL US</h4>
                  <p><i class="fa fa-envelope" aria-hidden="true"></i> submissionsrathinam@gmail.com</p>
               </div>
               <div className='coordinatore mb-4'>
                  <h4>ADDRESS</h4>
                  <p><i class="fa fa-map-marker" aria-hidden="true"></i> Rathinam Techzone Campus, Pollachi Road, Eachanari, Coimbatore, Tamil Nadu, India - 641021.</p>
               </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
