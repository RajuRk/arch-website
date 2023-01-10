import React from 'react'
import Award1 from '../../img/award-1.jfif';
import Award2 from '../../img/award-2.jfif';
import Award3 from '../../img/award-3.jfif';
import { Container } from 'react-bootstrap'

const Awards = () => {
  return (
    <section id="awards-and-fess">
      <Container>
            <div className="title">
               <h2>Awards & Fees</h2>
            </div>
            <div className="awards">
                <div className="awards-sec">
                    <img src={Award1} alt=""/>
                    <h4>Winner</h4>
                    <p className="value">50,000 INR</p>
                    <p>Cash + Trophy + Certificate</p>
                </div>
                <div className="awards-sec">
                    <img src={Award2} alt=""/>
                    <h4>Runner - Up</h4>
                    <p className="value">15,000 INR</p>
                    <p>Cash + Trophy + Certificate</p>
                </div>
                <div className="awards-sec">
                    <img src={Award3} alt=""/>
                    <h4>Special Mention</h4>
                    <p>Trophy + Certificate</p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Awards
