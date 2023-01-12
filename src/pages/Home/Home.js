import React from 'react';
import { Container,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import About from './About';
import Awards from './Awards';
import Partners from './Partners';
import Events from './Events';
import Jury from './Jury';
import ReleseDate from './ReleseDate';

const Home = () => {
  return (
    <>
        <section id="banner-section">
            <Container>
                <div className="title-section" style={{color: "#fff"}}>
                    <h1>AVIVA</h1>
                    <h5>PRESENTS</h5>
                    <h2>YOUNG TALENT HUNT</h2>
                    <Link to="/register"><Button>Register Now</Button></Link>
                </div>
            </Container>
        </section>
       <About/>
       <Awards/>
       <Jury/>
       <ReleseDate/>
       <Partners/>
       <Events/>
    </>
  )
}

export default Home
