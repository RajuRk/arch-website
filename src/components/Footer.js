import React from 'react';

const Footer = () => {
  return (
    <section id="contact">
        <footer>
            <div className="container">
                <div className="contact-list">
                <div className="contact-details">
                    <div className="title">
                    <h2>CONTACT</h2>
                    </div>
                    <p><strong>Staff: </strong><i className="fa fa-phone" aria-hidden="true"></i> 82482 90509, 99408 14141</p>
                    <p><strong>Student Coordinator: </strong><i className="fa fa-phone" aria-hidden="true"></i> 98091 29476, 86067 31344</p>
                    <p><i className="fa fa-envelope" aria-hidden="true"></i> submissionsrathinam@gmail.com</p>
                    <p><i className="fa fa-map-marker" aria-hidden="true"></i> Rathinam Techzone Campus, <br/>Pollachi Road, Eachanari, Coimbatore,<br/> Tamil Nadu, India - 641021.</p>
                </div>
                </div>
            </div>
        </footer>
        <div className="copyright">
            <p>&copy; Copyrights <a href="https://rankuhigher.in/" target="_blank" rel="noreferrer">RankYouHigher</a>. All Rights Reserved</p>
        </div>
    </section>
  )
}

export default Footer
