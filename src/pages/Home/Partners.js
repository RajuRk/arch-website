import React from 'react'
import AicLogo from '../../img/aic-logo.png';
import RathinamLogo from '../../img/rathinam-logo.png';
import { Container} from 'react-bootstrap'

const Partners = () => {
  return (
    <section id="partners">
        <Container>
            <div className="title" style={{textAlign: "center"}}>
               <h2>PARTNERS</h2>
            </div>
            <div className='flex-partners'>
                <div className="grid-partners-images">
                    <div className="partner-logo">
                       <img src={AicLogo} alt="" />
                    </div>
                    <div className="partner-logo">
                       <img src={RathinamLogo} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Partners
