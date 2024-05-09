import ProfileCard from "./ProfileCard";
import AfroImage from "./images/afrodelice.png";
import Clock from "./images/clock.png";

const ProjectCard = () => {
  return (
    <>
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard
                title='Afro Delice'
                handle='@alexa99'
                imageUrl={AfroImage}
                description='A UI of an African food restaurant'
                githubUrl='https://github.com/Tochiskool/afrodelicetrieste'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='Digital Clock'
                handle='@digitalClock2024'
                imageUrl={Clock}
                description='A modern clock'
                githubUrl='https://github.com/Tochiskool/react-digital-clock'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
              // title='Siri'
              // handle='@siri56'
              // imageUrl={SiriImage}
              // description='Siri is created by Google'
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectCard;
