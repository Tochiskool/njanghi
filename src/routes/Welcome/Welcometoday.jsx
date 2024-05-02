import mypic from "./images/chris.jpeg"

const Welcometoday = () => {
  return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-1-3 pull-right-sm">
                        <div className="frame frame-primary">
                            <img src={mypic} style={{width:"100%", height:"auto",objectFit:"cover", borderRadius:"60%"}}/>
                            </div>
                    </div>
                    <div className="col-2-3">
                        <h3>A Determined Man</h3> 
                        <h5>I am A Christian N and I feel like I lost my life to coding. But I am feeled with an overwhelming joy
                        I have tried to use this website to demonstrate my capabilities and waht I can do in the next few months if 
                        am giving the opportunity that I seek. I left coding to make earns meet and returning back so many things have change
                        but thank God am up to the task. This is not a cover letter or an application for a job. Its just a brief intro of me.
                        <em><strong>This is what I want to do in life and all I seek is a chance to join a team</strong></em>
                        <details>
                            <summary>This is a MERN STACK WEBSITE. <em style={{color:"grey"}}>read more....</em> </summary>
                             I have deep knowledge on Mongo, mongoose, Mysql, sequelize
                             <ul>
                                <li>REACT</li>
                                <li>Mongo</li>
                                <li>Sequelize</li>
                                <li>API CALLS</li>
                                <li>Regx</li>
                                <li>Time and space complexity issues</li>
                             </ul>
                        </details>
                        </h5>
                    </div>
                </div>
         </div>
    </section>
  )
}

export default Welcometoday



