import React from 'react'

import historicEngland from '../../assets/img/historic-england.jpg';
import islington from '../../assets/img/islington.jpg';

const Partners = () => {
  return (
    <section className="mt0 pt4 pb4 bt b--primary bw1 lh-copy">
      <h2 className="mt0 f4">Project Partners</h2>
      <section>
        <h3>Historic England</h3>
        <p>Historic England is a public body that looks after England's historic
        environment. It champions and protects historic places by helping people
        understand, value and care for them. Thank you to Historic England for
        funding the Our Eyes on Islington and providing guidance to the project
        team.</p>
      </section>

      <section>
        <h3>London Borough of Islington</h3>
        <p>Islington’s rich and unique built environment consists of 41
        designated conservation areas, around 4,500 statutorily listed buildings
        and 2,000 locally listed buildings and structures. The Council’s Design
        and Conservation team play a major role in devising planning policies
        which ensure that well-designed new development contributes to the local
        character and distinctiveness of the borough.</p>
      </section>

      <section>
        <h3>The Islington Society</h3>
        <p>The Islington Society is a membership organisation of people who live,
        work or have an interest in Islington. Our thanks to the Islington Society,
        whose collaborations on events and publications have played an important
        role in raising awareness of the project.</p>
      </section>

      <section className="w-100 pv2">
        <div className="flex align-center justify-start">
          <div>
          <a href="https://historicengland.org.uk" target="_blank">
            <img className="w5" alt="Partner: Historic England" src={historicEngland} />
          </a>
          </div>
          <div>
          <a href="https://www.islington.gov.uk/planning/designandconservation" target="_blank">
            <img className="w5 pt1 pt2-ns" alt="Partner: London Borough of Islington" src={islington} />
          </a>
          </div>
        </div>
      </section>

    </section>
  )
}

export default Partners
