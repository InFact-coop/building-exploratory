import React from 'react';
import logo from '../assets/img/building-exploratory.png';
import historicEngland from '../assets/img/historic-england.jpg';
import islington from '../assets/img/islington.jpg';


const About = () => {
  return(
    <main className="flex-l primary">

      <div
        className="w-50-l ph4 pv5-l overflow-scroll"
        style={{ height: "calc(100vh - 4rem)" }}>

      <header>
        <img alt="The Building Exploratory" src={logo} />
        <p className="f2 b mb0 ">Islington Local List</p>
      </header>

      <div>
        <section className="pt4">
          <h2 className="f4">About Islington Local List</h2>

          <p>At the beginning of the project, Islington’s Local List contained 1,200
          entries, a figure considerably higher than that of neighbouring boroughs Camden
          and Hackney.</p>

          <p>While locally listed buildings are not subject to the strict planning
          requirements that apply to statutory listed buildings, they are nonetheless
          considered to make a positive contribution to the local character and
          distinctiveness of the borough, and provide an important local resource.</p>

          <p>Islington’s Local List is composed of buildings and structures such as post
          boxes, bollards, paving stones, and railings. The buildings on the Local
          List range from residential to commercial buildings such as pubs and shops,
          and places of worship including churches and mission halls. They also vary
          in architectural style and historic period encompassing Georgian and Victorian
          architecture and 20th Century design.</p>

          <p>As with other London boroughs, Islington’s rich and diverse heritage of
          buildings and spaces have been maintained and enhanced by the designation
          of statutory and locally listings, and Conservation Areas. The borough
          also has a number of designated archaeological priority areas.</p>

          <p>The process of making changes to the Local List, by way of adding or
          removing entries, consists of several steps: recommendation by conservation
          officers or members followed by public consultation. Ultimate decisions
          about the removal or addition of items are made by the Islington Council’s
          planning committee.</p>
        </section>

        <section className="pt4">
          <h2 className="f4">Our Eyes on Islington</h2>
          <p>Islington Local List website, which was created as part of the Our Eyes
          on Islington project. Delivered across 2016 and 2017, the project has
          reviewed Islington’s schedule of locally listed buildings, buildings
          considered to be important to the borough for their architecture, history
          or distinctive character. Led by the Building Exploratory in partnership
          with Historic England and the LB of Islington, a team of dedicated
          volunteers surveyed and researched the Local List, which had not been
          reviewed for over 20 years. Given London’s fast pace of change, the
          project has updated the Local List, making it publicly accessible, and
          celebrates Islington’s rich and diverse built environment heritage.</p>

          <p>Once inducted and equipped with a research toolkit, volunteers were
          allocated a set of buildings to review. Volunteers began by visiting and
          visually documenting their buildings, followed by desk and archive
          research drawing on historic maps, trade directories and old photographs.
          Volunteer findings and observations were used to populate a data
          spreadsheet that was then collated and reviewed, and forms the basis of
          the content for this website.</p>
        </section>

        <section className="pt4 pb4">
          <h2 className="f4">Project Aims and Outcomes</h2>
          <p>The Our Eyes on Islington review ensures that the local heritage
          list is up-to-date in order to provide a concise and comprehensive
          document that can benefit planning processes and decision-making; to
          promote Islington’s rich building stock; and ultimately, to identify
          and conserve assets which contribute to the character, economy and
          community pride of the borough.</p>
        </section>
      </div>

      <div>
        <section className="pt4 pb4 bt b--primary bw1">
          <h2 className="f4">Project Partners</h2>
          <p>Our Eyes on Islington is a project in partnership with the
          <a>London Borough of Islington</a> and Historic England.</p>

          <p>In reviewing the Local List, project volunteers applied LB of
          Islington’s set of heritage criteria. The full list of criteria can
          be found <a>here</a>.</p>

          <p>Historic England is the public body that looks after Englands
          historic environment. It champions and protects historic places by
          helping people understand, value and care for them.</p>

          <div>logo logo</div>
        </section>
      </div>

      <div>
        <section className="pt4 bt b--primary bw1">
          <h2 className="f4">The Building Exploratory</h2>
          <p>Launched in 1998, the Building Exploratory is a learning and
          engagement organisation that helps communities to discover the
          secrets of their local area. It works across London with schools,
          families, residents, older people, local authorities and businesses
          to engage them in celebrating their built environment, its heritage,
          buildings and public spaces. The Building Exploratory aims to improve
          access to information and give those who do not have a voice,
          opportunities to share their views about the neighbourhoods where
          they live and work. The Building Exploratory has delivered projects
          in twenty London boroughs, training more than 750 volunteers and
          engaging more than 50 communities.</p>

          <p>For further information about our work and the Our Eyes on
          Islington project, please visit our website:
          <a>www.buildingexploratory.org.uk</a>
          or email: mail@buildingexploratory.org.uk</p>
        </section>
      </div>

      </div>

      <div
        className="w-50-l ph4 pv5-l overflow-scroll bl b--primary bw1"
        style={{ height: "calc(100vh - 4rem)" }}>

        <div>
          <section>
            <h2 className="f4 ma0">Thank You to All Our Volunteers!</h2>
            <p>While the main aim of the project was to update the Local List
            and create a comprehensive document to provide greater clarity for
            planning processes, it also aimed to showcase and promote
            Islington’s rich built environment heritage assets. In an age when
            the capacity and resources of local authorities are greatly reduced,
            the project also demonstrates the importance of community engagement
            and the power of harnessing the interests and abilities of local
            volunteers in enhancing the work of local authorities. Facilitating
            this engagement and celebration of local heritage lies at the core
            of the Building Exploratory’s work.</p>

            <p>The Building Exploratory would like to thank all (number) of the
            wonderful volunteers. The project has only been possible due to
            their commitment and hard work.</p>

            <p>The project demonstrates the high levels of engagement and
            passion for Islington’s local history, and has been a fantastic
            learning process both for volunteers and the Building Exploratory
            as an organisation.</p>

            <p>Generous support for the project has also been provided by
            <a>The Islington Society</a>, and its collaborations on events and
            publications have played an important role in raising awareness of
            the project - Thank you!</p>
          </section>

          <section>
            <h2 className="f4">Our Eyes on Islington Volunteers:</h2>
            <div className="flex flex-wrap justify-between">
              <p className="ph1">Jeremy Woods</p>
              <p className="ph1">Jeremy Woods</p>
              <p className="ph1">Jeremy Woods</p>
              <p className="ph1">Jeremy Woods</p>
              <p className="ph1">Jeremy Woods</p>
              <p className="ph1">Jeremy Woods</p>
              <p className="ph1">Jeremy Woods</p>
              <p className="ph1">Jeremy Woods</p>
            </div>
          </section>

        </div>
      </div>

    </main>
  )
}

export default About;
