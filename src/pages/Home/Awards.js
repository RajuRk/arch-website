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
                    <p className="value">600 USD</p>
                    <p>Cash+Crafted certificate + Publication + Insignia</p>
                </div>
                <div className="awards-sec">
                    <img src={Award2} alt=""/>
                    <h4>Runner - Up</h4>
                    <p className="value">150 USD</p>
                    <p>Cash + e-certificate +insignia</p>
                </div>
                <div className="awards-sec">
                    <img src={Award3} alt=""/>
                    <h4>People's Choice</h4>
                    <p>e-certificate</p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Awards
