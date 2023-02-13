import React, {useState} from 'react'
import { Container, Row, Form, Button } from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import "yup-phone";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { injectStyle } from "react-toastify/dist/inject-style";
import axios from 'axios';

const schema = yup.object().shape({
    name: yup.string()
          .required('Name is required')
          .min(3,'Minimum 3 characters required')
          .max(15,'Maximum 15 characters allowed'),
    competitionName: yup.string().required('Competition name is required'),
    collegeName: yup.string()
                 .required('College name is required')
                 .min(3,'Minimum 3 characters required')
                 .max(50,'Maximum 50 characters allowed'),
    year: yup.string().required('Year is required'),
    address: yup.string().required('Address is required')
             .trim()
             .min(10,'Minimum 10 characters required')
             .max(50,'Maximum 50 characters allowed'),
    email: yup.string().required('Email is required').email('Please enter valid email'),
    contact: yup.string().required('Contact No is required').phone('Please enter valid contact no')
});


const Register = () => {
  injectStyle();
  const [name, setName] = useState('');
  const [competitionName, setCompetitionName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [year, setYear] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });


  const getData = async() => {
    const data = {
        Name: name,
        CompetitionName: competitionName,
        CollegeName: collegeName,
        Year: year,
        Address: address,
        Email: email,
        Contact: contact
    };

    try{
        await axios.post('https://sheet.best/api/sheets/f901d167-56be-46e6-aa81-a4b20a8b71bb', data)
        .then((response) => {
          if(response.data){
            toast("Successfully Submitted!");
            setName('');
            setCompetitionName('');
            setCollegeName('');
            setYear('');
            setAddress('');
            setEmail('');
            setContact('');
        }
        });
    }catch(err){
        console.log(err.message);
    }
  }


  return (
    <section id="register-page">
      <Container>
        <Row>
            <div className='title register-title' style={{textAlign: 'center'}}>
                <h2>RATHINAM SCHOOL OF ARCHITECTURE AVIVA - YOUNG TALENTS PRESENTS</h2>
                <h6> INTRA COLLEGE DESIGN COMPETITION  (2022-2023)</h6>
            </div>
        <Form autoComplete="off" onSubmit={handleSubmit(getData)}>
            <Form.Group className="mb-4" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  {...register("name")} 
                  type="text" 
                  placeholder="Enter Name" 
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <p className='errorMessage'>{errors.name?.message}</p>
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>Competition Name</Form.Label>
                <Form.Select 
                  {...register("competitionName")}
                  value={competitionName}
                  onChange={e => setCompetitionName(e.target.value)}  
                >
                  <option value="" disabled="disabled">Choose Competition</option>
                  <option value="ARCHITECTURAL PHOTOGRAPHY & SKETCHING">ARCHITECTURAL PHOTOGRAPHY & SKETCHING</option>
                  <option value="Urban Space Development">Urban Space Development</option>
                  <option value="SUSTAINABLE HOUSE">SUSTAINABLE HOUSE</option>
                  <option value="ENTRANCE AREA">ENTRANCE AREA</option>
                </Form.Select>
                <p className='errorMessage'>{errors.competitionName?.message}</p>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicCollegeName">
                <Form.Label>College Name</Form.Label>
                <Form.Control 
                  {...register("collegeName")} 
                  type="text" 
                  placeholder="Enter College Name" 
                  value={collegeName}
                  onChange={e => setCollegeName(e.target.value)}  
                />
                <p className='errorMessage'>{errors.collegeName?.message}</p>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicYear">
                <Form.Label>Year - (Batch)</Form.Label>
                <Form.Select
                  {...register("year")}
                  value={year}
                  onChange={e => setYear(e.target.value)}
                >
                  <option value="" disabled="disabled">Choose Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="Final Year">Final Year</option> 
                </Form.Select>
                <p className='errorMessage'>{errors.year?.message}</p>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                  {...register("address")} 
                  type="text" 
                  placeholder="Enter Address" 
                  value={address}
                  onChange={e => setAddress(e.target.value)}  
                />
                <p className='errorMessage'>{errors.address?.message}</p>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  {...register("email")} 
                  type="text" 
                  placeholder="Enter Email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}  
                />
                <p className='errorMessage'>{errors.email?.message}</p>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Contact No</Form.Label>
                <Form.Control 
                  {...register("contact")} 
                  type="text" 
                  placeholder="Enter Contact Number" 
                  value={contact}
                  onChange={e => setContact(e.target.value)}  
                />
                <p className='errorMessage'>{errors.contact?.message}</p>
            </Form.Group>
            <Button 
              className="btn-register" 
              type="submit"
            >
                Submit
            </Button>
            <ToastContainer 
                position="bottom-right"
                // autoClose={5000} 
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                // pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            </Form>
        </Row>
      </Container>
    </section>
  )
}

export default Register
