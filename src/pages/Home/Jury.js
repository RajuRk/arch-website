import React from 'react'
import Jury5 from '../../img/jury-5.JPG';
import Jury6 from '../../img/jury-6.JPG';
import Arun from '../../img/arun.jpg';
import { Container,Row,Col } from 'react-bootstrap'

const datas = [
     
    {
        id: 1,
        name: "AR. VENKATRAMAN",
        desgnation: "KRAFT DESIGN REVOLUTION-(CHENNAI)",
        contact: "044-45542202",
        desc: "Kraft Design Revolutions(M)LLP boasts of a very dynamic team with multi-talented young minds. From the days of its inception in 2012, the team has grown strong in design values, deliverables and has worked with various typologies of projects which include residential, group housing, healthcare, commercial, institutional and industrial establishments. Our strengths cover the spectra of  Architecture, Urban Planning, Interior Design, Product design, and Branding. Our project locations span the globe viz. India, Oman, Taiwan, Cayman Islands.",
        img: Jury5
    },
    {
        id: 2,
        name: "Ar. K. Prasanna Pandian",
        desgnation: "Arch-Infinitum, Chennai",
        contact: "044-45542202",
        desc: "Ar. K. Prasanna Pandian is a multidisciplinary designer who combines art, architecture, brand building and interiors. His profession takes multiple dimensions as artist, architect, animator, theatre artist, filmmaker, advertising and model photographer. He also serves as an assistant professor at his alma mater. He had done five master's degree programs, including a master's in Mass Communication and Journalism, dual masters in Architecture - M.Arch General and M.Arch Building Management, masters in Digital Visual Effects and a masters in business administration.",
        img: Jury6
    },
    {
        id: 3,
        name: "Ar. Arun Prasad Prakashan",
        desgnation: "Arun & Associates - (Coimbatore)",
        contact: "+91 422 2301387",
        desc: "Arun Prasad Prakashan was born in Coimbatore in 1972. A gold medalist from School of Planning and Architecture, New Delhi, for the best outgoing student in 1998.​ He is the founder and Principal of Arun and Associates since its inception in 1998. He is a member of the City Technical Advisory Group (CTAG) in Jawaharlal Nehru National Urban Renewal Mission (JNNURM) for Coimbatore city in Tamil Nadu. Currently, he is the Chairman of Indian Institute of Architects, Coimbatore Center (IIA-CC). He is also a member of Board of Studies, Anna University, Coimbatore.",
        img: Arun
    },
]

const Jury = () => {
  return (
    <section id="jury">
        <Container className='jury-container'>
            <div className="title" style={{textAlign: "center"}}>
               <h2>JURY PANELS</h2>
            </div>
            {
                datas.map((data) => (
                    <Row key={data.id}>
                        <Col md={10} lg={10}>
                            <div className="jury-sec">
                                <div className="jury-img">
                                    <img src={data.img} alt=""/>
                                </div>
                                <div className="jury-content">
                                    <h4>{data.name}</h4>
                                    <p>{data.desgnation}</p>
                                    <p>{data.desc}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                ))
            }
        </Container>
    </section>
  )
}

export default Jury
