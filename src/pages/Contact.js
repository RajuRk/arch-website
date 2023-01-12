import React,{useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import "yup-phone";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
   name: yup.string().required("Name is required"),
   email: yup.string().required("Email is required").email("Please enter a valid email address"),
   phone: yup.string().required("Phone is required").phone("Please enter a valid phone number"),
   subject: yup.string().required("Subject is required"),
   message: yup.string().required("Message is required").min(15, "Minimum 15 characters required").max(240, "Maximum 240 characters allowed")
});

const Contact = () => {
  
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });

  const sendEmail = () => {
    try{
      emailjs.sendForm('service_39ftqpa', 'template_887sqsf', form.current, 'oxwFpbp_QrYT0Jvcb')
      .then((result) => {
        toast("Successfully Submitted. We'll contact you soon!");
        setName('')
        setEmail('')
        setPhone('')
        setSubject('')
        setMessage('')
      }, (error) => {
        console.log(error.text);
      })
    }catch(err){
       console.log(err.message);
    }
}


  return (
    <section id="conatcPage">
      <Container className='mt-4 mb-4'>
        <Row>
          <Col md={8} lg={8}>
            <div className="contactForm">
              <div className="">
                <h4>CONTACT</h4>
              </div>  
              <Form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Name"
                      {...register("name")}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <p className='errorMessage'>{errors.name?.message}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Email"
                      {...register("email")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className='errorMessage'>{errors.email?.message}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Phone number" 
                      {...register("phone")}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <p className='errorMessage'>{errors.phone?.message}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Subject" 
                      {...register("subject")}
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <p className='errorMessage'>{errors.subject?.message}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={3} 
                      placeholder="Enter Message"
                      {...register("message")}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)} 
                    />
                    <p className='errorMessage'>{errors.message?.message}</p>
                </Form.Group>
                <Button type='submit' className='btn-register'>Submit</Button>
                <ToastContainer 
                position="top-right"
                autoClose={5000} 
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
              </Form>
            </div>
          </Col>
          <Col md={4} lg={4}>
            <div className='contactDetails'>
               <div className='coordinatore mb-4'>
                  <h4>STAFF</h4>
                  <p><i className="fa fa-phone" aria-hidden="true"></i> 82482 90509</p>
                  <p><i className="fa fa-phone" aria-hidden="true"></i> 99408 14141</p>
               </div>
               <div className='coordinatore mb-4'>
                  <h4>STUDENT COORDINATOR</h4>
                  <p><i className="fa fa-phone" aria-hidden="true"></i> 98091 29476</p>
                  <p><i className="fa fa-phone" aria-hidden="true"></i> 86067 31344</p>
               </div>
               <div className='coordinatore mb-4'>
                  <h4>EMAIL US</h4>
                  <p><i className="fa fa-envelope" aria-hidden="true"></i> submissionsrathinam@gmail.com</p>
               </div>
               <div className='coordinatore mb-4'>
                  <h4>ADDRESS</h4>
                  <p><i className="fa fa-map-marker" aria-hidden="true"></i> Rathinam Techzone Campus, Pollachi Road, Eachanari, Coimbatore, Tamil Nadu, India - 641021.</p>
               </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
