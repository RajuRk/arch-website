import React from 'react'
import Jury1 from '../../img/jury-1.JPG';
import Jury2 from '../../img/jury-2.jpg';
import Jury3 from '../../img/jury-3.png';
import Jury4 from '../../img/jury-4.jpg';
import Jury5 from '../../img/jury-5.JPG';
import Jury6 from '../../img/jury-6.JPG';
import { Container,Row,Col } from 'react-bootstrap'

const datas = [
    {
        id: 1,
        name: "AR.BIJU KURIKOSHE",
        desgnation: "RED ARCHITECTS (Chennai)",
        contact: "+91 98790 01860",
        desc: "In 2014, Archi Diaries started as a blog to share the design processes of a few joint academic studios conducted by the authors at CEPT University, Ahmedabad. From a place for pedagogical rumblings, Archi Diaries has evolved into a digital publishing platform with intentions to generate discussion, and propose alternatives and debates in the field of architecture and design pedagogy. In nutshell, Archi Diaries is the search for a shared ground between theory and praxis. Red Architects is a global architecture & interior design firm that unites a diverse team of strategists, planners, architects, designers & industry.",
        img: Jury1
    },
    {
        id: 2,
        name: "AR. SRIRAM GANAPATHY",
        desgnation: "KSM ARCHITECTS (Chennai)",
        contact: "+91 44 22333587",
        desc: "KSM was formed in the year 1990 with a team of highly professional and experienced architects and engineers with exposure to international standards of design and detailing. Recent years have seen immense changes in technology and lifestyle in India. Changes that have had a profound effect on the buildings in which we live, work, and play. Today’s designs must be innovative and the buildings, practical and viable. We are sensitive to these issues and it has been the objective of the firm to maintain a high standard of design and technical competence with a great emphasis on climatically relevant and sustainable design.​In recent years, KSM is being recognized as one of the leading firms that design sustainable and eco-friendly buildings. A leading architectural magazine, Indian Architect and Builder has listed KSM as one of 50 leading architectural firms in the country, that have made a difference to architecture in India.",
        img: Jury2
    },
    {
        id: 3,
        name: "AR. Vigneswar",
        desgnation: "A+V Architects (Chennai)",
        contact: "044-2617 1820",
        desc: "Value-Addition through Sensible Design defines Vigneswar’s Work-Ethic. A+V was founded with this Motto. Vigneswar graduated his Bachelor’s in Architecture from C.E.P.T University, Ahmedabad, and his Master (MSc-Exchange) at T.U. Delft, The Netherlands. His work has been recognized by the Indian Institute of Architects (IIA Awards for Excellence 2016) and also published in various leading Forums like The Hindu, Kurla Varkey Design Forum, and SAHC International Conference (Mexico).​ Before starting A+V, he had extensive professional experience handling a wide variety of projects in multiple firms. He also extended his learning through travels and workshops inside India and abroad in Europe and Mexico. Besides his Practice, he has also served as a Visiting Faculty at some of the Top Architecture Colleges in Chennai, namely, The School of Architecture and Planning (SAP), Anna University, Guindy, and MEASI Academy of Architecture.",
        img: Jury3
    },
    {
        id: 4,
        name: "AR. GEORGE SEEMON",
        desgnation: "STAPATI – (Bangalore)",
        contact: "080-42213810",
        desc: "Stapati is an architecture practice established by Tony Joseph in 1989. Tony graduated from MIT Manipal and completed his masters in design from the University of Texas, Austin, in the Charles Moore program. Interactions and travels with Moore and his views on regional architecture had a strong influence in the direction of Tony's design. He returned to India and started Stapati, which has steadily grown into a multi-disciplinary practice emphasizing values of integrity, sustainability and innovation. Stapati’s architecture emerges from a sensitive understanding of the context; one where the evolution of design is firmly rooted in the region’s traditional narratives, while interpreting the elements in a modern context. There is an underlying acuity in the design approach, which responds to the site uniquely, rendering it relevant and timeless.",
        img: Jury4
    },
    {
        id: 5,
        name: "AR. VENKATRAMAN",
        desgnation: "KRAFT DESIGN REVOLUTION-(CHENNAI)",
        contact: "044-45542202",
        desc: "Kraft Design Revolutions(M)LLP boasts of a very dynamic team with multi-talented young minds. From the days of its inception in 2012, the team has grown strong in design values, deliverables and has worked with various typologies of projects which include residential, group housing, healthcare, commercial, institutional and industrial establishments. Our strengths cover the spectra of  Architecture, Urban Planning, Interior Design, Product design, and Branding. Our project locations span the globe viz. India, Oman, Taiwan, Cayman Islands.",
        img: Jury5
    },
    {
        id: 6,
        name: "AR. PRASANNA PANDIAN",
        desgnation: "CRAFT",
        contact: "044-45542202",
        desc: "K. Prasanna Pandian also known as PP, is an artist, architect and animator from Tamil Nadu in south India. He was born in Madurai, Tamil Nadu in 1984, and is the founder-director of Archinfinitum, an architectural firm. He has won many awards and titles in the field of art and architecture and is good in interior design and landscape architecture. He was also introduced to the Tamil cinema industry as a music director. He finished his B.Arch at Measi Academy of Architecture, Chennai, while his schooling was at Madurai.",
        img: Jury6
    },
]

const Jury = () => {
  return (
    <section id="jury">
        <Container className='jury-container'>
            <div className="title" style={{textAlign: "center"}}>
               <h2>JURY</h2>
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
