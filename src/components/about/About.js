import React from 'react';
import logo from '../../assets/img/building-exploratory.png';

import Volunteers from './Volunteers'
import IslingtonLocalList from './IslingtonLocalList'
import OurEyesOnIslington from './OurEyesOnIslington'
import Partners from './Partners'
import BuildingExploratory from './BuildingExploratory'

const About = () => {
  return(
    <main className="mv5 mv0-l flex-l primary">

      <div
        className="w-50-l ph4 pv5-l height-scroll-l overflow-scroll-l">

        <header>
          <img alt="The Building Exploratory" src={logo} className="measure-narrow-l w-4" />
          <p className="f2 b mt2 mb0">Islington Local List</p>
        </header>

        <IslingtonLocalList />

        <OurEyesOnIslington />

        <BuildingExploratory />
          <Partners />
      </div>

      <div
        className="w-50-l ph4 pv5-l bl-l b--primary bw1-l height-scroll-l overflow-scroll-l">
          <Volunteers />
      </div>


    </main>
  )
}

export default About;
