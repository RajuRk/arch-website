import React from 'react'
import Jury1 from '../../img/jury-1.jfif';
import { Container,Row,Col } from 'react-bootstrap'

const Jury = () => {
  return (
    <section id="jury">
        <Container>
            <div className="title" style={{textAlign: "center"}}>
               <h2>JURY</h2>
            </div>
            <Row>
                <Col md={10} lg={10}>
                    <div className="jury-sec">
                        <div className="jury-img">
                            <img src={Jury1} alt=""/>
                        </div>
                        <div className="jury-content">
                            <h4>Stefan Jauslin</h4>
                            <p>Founding Partner, Vehovar & Jauslin, Switzerland</p>
                            <p>Swiss Born Stefan Jauslin graduated from ETH Zurich in 1992. He then formed his own practice as architect and set designer while teaching “Capturing and Representing Space by means of Video” with Rudlof Manz at ETH Zurich from 1992 to 1993. From 1994 to 1997 he was teaching architecture and urbanism with Marc Angélil at ETH Zurich.</p>
                        </div>
                    </div>
                </Col>
                <Col md={2} lg={2}></Col>
            </Row>
            <Row>
                <Col md={2} lg={2}></Col>
                <Col md={10} lg={10}>
                    <div className="jury-sec">
                        <div className="jury-img">
                            <img src={Jury1} alt=""/>
                        </div>
                        <div className="jury-content">
                            <h4>Stefan Jauslin</h4>
                            <p>Founding Partner, Vehovar & Jauslin, Switzerland</p>
                            <p>Swiss Born Stefan Jauslin graduated from ETH Zurich in 1992. He then formed his own practice as architect and set designer while teaching “Capturing and Representing Space by means of Video” with Rudlof Manz at ETH Zurich from 1992 to 1993. From 1994 to 1997 he was teaching architecture and urbanism with Marc Angélil at ETH Zurich.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={10} lg={10}>
                <div className="jury-sec">
                    <div className="jury-img">
                        <img src={Jury1} alt=""/>
                    </div>
                    <div className="jury-content">
                        <h4>Stefan Jauslin</h4>
                        <p>Founding Partner, Vehovar & Jauslin, Switzerland</p>
                        <p>Swiss Born Stefan Jauslin graduated from ETH Zurich in 1992. He then formed his own practice as architect and set designer while teaching “Capturing and Representing Space by means of Video” with Rudlof Manz at ETH Zurich from 1992 to 1993. From 1994 to 1997 he was teaching architecture and urbanism with Marc Angélil at ETH Zurich.</p>
                    </div>
                </div>
                </Col>
                <Col md={2} lg={2}></Col>
            </Row>
            <Row>
                <Col md={2} lg={2}></Col>
                <Col md={10} lg={10}>
                <div className="jury-sec">
                    <div className="jury-img">
                        <img src={Jury1} alt=""/>
                    </div>
                    <div className="jury-content">
                        <h4>Stefan Jauslin</h4>
                        <p>Founding Partner, Vehovar & Jauslin, Switzerland</p>
                        <p>Swiss Born Stefan Jauslin graduated from ETH Zurich in 1992. He then formed his own practice as architect and set designer while teaching “Capturing and Representing Space by means of Video” with Rudlof Manz at ETH Zurich from 1992 to 1993. From 1994 to 1997 he was teaching architecture and urbanism with Marc Angélil at ETH Zurich.</p>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Jury
