import React from 'react'
import { Container, Row, Form, Button } from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import "yup-phone";

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
 
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <section id="register-page">
      <Container>
        <Row>
            <div className='title register-title' style={{textAlign: 'center'}}>
                <h2>RATHINAM SCHOOL OF ARCHITECTURE AVIVA - YOUNG TALENTS PRESENTS</h2>
                <h6> INTER COLLEGE DESIGN COMPETITION  (2022-2023)</h6>
            </div>
        <Form onSubmit={handleSubmit((data) => {
            console.log(data);
        })}>
            <Form.Group className="mb-4" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control {...register("name")} type="text" placeholder="Enter Name" />
                <p className='errorMessage'>{errors.name?.message}</p>
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>Competition Name</Form.Label>
                <Form.Select {...register("competitionName")}>
                  <option value="" disabled="disabled">Choose Competition</option>
                  <option value="Facade Design">Facade Design</option>
                  <option value="Pavilion">Pavilion</option>
                  <option value="Sustainable House">Sustainable House</option>
                  <option value="Architectural photography">Architectural photography</option>
                  <option value="Smart Bus Shelters">Smart Bus Shelters</option>
                </Form.Select>
                <p className='errorMessage'>{errors.competitionName?.message}</p>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicCollegeName">
                <Form.Label>College Name</Form.Label>
                <Form.Control {...register("collegeName")} type="text" placeholder="Enter College Name" />
                <p className='errorMessage'>{errors.collegeName?.message}</p>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicYear">
                <Form.Label>Year - (Batch)</Form.Label>
                <Form.Control {...register("year")} type="text" placeholder="Enter Year" />
                <p className='errorMessage'>{errors.year?.message}</p>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control {...register("address")} type="text" placeholder="Enter Address" />
                <p className='errorMessage'>{errors.address?.message}</p>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control {...register("email")} type="text" placeholder="Enter Email" />
                <p className='errorMessage'>{errors.email?.message}</p>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Contact No</Form.Label>
                <Form.Control {...register("contact")} type="text" placeholder="Enter Contact Number" />
                <p className='errorMessage'>{errors.contact?.message}</p>
            </Form.Group>
            <Button className="btn-register" type="submit">
                Submit
            </Button>
            </Form>
        </Row>
      </Container>
    </section>
  )
}

export default Register
