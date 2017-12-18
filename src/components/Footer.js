import React from 'react';
import logo from '../assets/img/building-exploratory.png';
import historicEngland from '../assets/img/historic-england.jpg';
import islington from '../assets/img/islington.jpg';
import Twitter from '../assets/social/Twitter';
import Instagram from '../assets/social/Instagram';
import Fb from '../assets/social/Fb';

const Footer = () => {


  return (
    <div className="flex bt b-primary bw1 pa3 primary">

      <section className="w-33 pa2">
        <img className="w5" alt="" src={logo} />


        <p className="ma0 lh-copy"><a className="primary f5 no-underline " href="mailto:mail@buildingexploratory.org.uk?Subject=Hello" target="_top">mail@buildingexploratory.org.uk</a></p>

        <p className="ma0 lh-copy"><a className="primary f5 no-underline" href="tel:+442076080775">+44 (0)20 7608 0775</a></p>

        <p className="ma0 lh-copy"><a className="primary f5 no-underline" href="http://www.buildingexploratory.org.uk/" target="_blank">www.buildingexploratory.org.uk</a></p>

        <section className="mt2">
          <p className="ma0 lh-copy">70 Cowcross Street</p>
          <p className="ma0 lh-copy">London, EC1M 6EJ</p>
        </section>
      </section>

      <section className="w-33 pa2 tc flex justify-center">
        <div className="mh2"><Twitter/></div>
        <div className="mh2"><Fb/></div>
        <div className="mh2"><Instagram/></div>
      </section>

      <section className="w-33 pa2">
        <div className="flex align-center justify-end">
          <div>
          <img className="w4" alt="Partner: Historic England" src={historicEngland} />
          </div>
          <div>
          <img className="w4" alt="Partner: London Borough of Islington" src={islington} />
          </div>
        </div>
      </section>


      </div>
  )
}

export default Footer;
