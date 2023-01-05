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
                    <p><i className="fa fa-phone" aria-hidden="true"></i> 82482 90509<br/> <i className="fa fa-phone" aria-hidden="true"></i> 99408 14141</p>
                    <p><i className="fa fa-envelope" aria-hidden="true"></i> abc@rathinam.in</p>
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
