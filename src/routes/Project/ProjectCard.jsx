import ProfileCard from "./ProfileCard";
import AfroImage from "./images/afrodelice.png";
import Clock from "./images/clock.png";
import Search from "./images/search.png";

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
                title='Search engine'
                handle='@searching images'
                imageUrl={Search}
                description='An application that searches images and we can upgrade'
                githubUrl={
                  "https://github.com/Tochiskool/search-engine/tree/main"
                }
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectCard;
