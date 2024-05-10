import mypic from "./images/chris.jpeg";

const Welcometoday = () => {
  return (
    <section style={{ marginTop: "1rem" }}>
      <div className='container'>
        <div className='row'>
          <div className='col-1-3 pull-right-sm'>
            <div>
              <img
                src={mypic}
                style={{
                  width: "80%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "60%",
                }}
              />
            </div>
          </div>
          <div className='col-2-3 styleCard'>
            <h3>Junior Frontend Developer</h3>
            <p>
              I am A Christian N and I feel like I lost my life to coding. But I
              am diffused through with an overwhelming joy that comes from the
              result am getting. This Reactjs Portfolio has a mission to
              demonstrate my capabilities and or abilities and the prospects I
              have in stock in the software field. I am searching for an
              opportunity join a dynamic team where I can contribute both to the
              front end and backend. Here you will find a few of my projects
              uncompleted and some are just simple demonstration of my
              understanding. I can run with you guys from Sql database to Nosql
              databases using mysql and mongodb. Infact I can contribute in any
              MERN stack project. No worries on version control. I have no
              problems in handling collaborations. . Am open toa junior position
              or{" "}
              <em>
                <mark>Paid internship</mark>
              </em>{" "}
              or any proposals you offer. I have a very very extensive knowledge
              in css using advance techniques. I also used some bootstrap but
              prefer to actually use grids and flex box to maintain a styling
              that is modular, scalable and reusable.
              <em>
                <strong>
                  This is what I want to do in life and all I seek is a chance
                  to join a team
                </strong>
              </em>
              <details>
                <summary>
                  This is a MERN STACK WEBSITE.{" "}
                  <em style={{ color: "grey", cursor: "pointer" }}>
                    read more....
                  </em>{" "}
                </summary>
                I have deep knowledge on Mongo, mongoose, Mysql, sequelize
                <ul>
                  <li>Operating system Mac</li>
                  <li>Version control: Git/Github/Slack</li>
                  <li>REACT</li>
                  <li>Mongodb</li>
                  <li>Sequelize and mysql</li>
                  <li>API CALLS</li>
                  <li>Object oriented Javascript</li>
                  <li>Ajax</li>
                  <li>Jquery</li>
                  <li>Regx</li>
                  <li>Heroku</li>
                  <li>Time and space complexity issues</li>
                </ul>
              </details>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcometoday;
